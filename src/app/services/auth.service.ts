import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private apiService: ApiService,
                private jwtHelper: JwtHelperService,
                private router: Router) {
    }

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }

    public register(userData) {
        this.apiService.post('/auth/register', userData).subscribe(res => {
            this.handleAuthData(res.user);
        });
    }

    public login(userData) {
        this.apiService.post('/auth/login', userData).subscribe(res => {
            this.handleAuthData(res.user);
        });
    }

    public logout() {
        localStorage.removeItem('token');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }

    public handleAuthData(data) {
        localStorage.setItem('token', data.token);
        this.loggedIn.next(true);
        this.router.navigate(['/']);
    }
}
