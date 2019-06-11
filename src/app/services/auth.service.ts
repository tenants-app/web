import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {SnackBarService} from './snack-bar.service';
import {User} from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);
    private currentUser$ = new BehaviorSubject<User>(this.getUser());

    constructor(private apiService: ApiService,
                private jwtHelper: JwtHelperService,
                private router: Router,
                private snackBar: SnackBarService) {
    }

    get isLoggedIn(): Observable<boolean> {
        if (localStorage.getItem('token')) {
            this.loggedIn.next(true);
        }
        return this.loggedIn.asObservable();
    }

    public getUser(): User {
        if (localStorage.getItem('token')) {
            const userData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
            return new User(userData);
        }
    }

    public register(userData: object): void {
        this.apiService.post('/auth/register', userData).subscribe(res => {
            this.handleAuthData(res.user);
            this.snackBar.show('Account was created');
        });
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !!token && !this.jwtHelper.isTokenExpired(token);
    }

    public login(userData: object): void {
        this.apiService.post('/auth/login', userData).subscribe(res => {
            this.handleAuthData(res.user);
        });
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }

    public handleAuthData(data: any): void {
        localStorage.setItem('token', data.token);
        this.loggedIn.next(true);
        this.router.navigate(['/']);
        this.snackBar.show('You have logged in');
        this.currentUser$.next(this.getUser());
    }
}
