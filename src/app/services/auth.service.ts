import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private apiService: ApiService) {
    }

    public register(userData) {
        this.apiService.post('/auth/register', userData).subscribe(res => {
        });
    }

    public login(userData) {
        this.apiService.post('/auth/login', userData).subscribe(res => {
            localStorage.setItem('access_token', res.user.token);
        });
    }

    public logout() {
        localStorage.removeItem('access_token');
    }
}
