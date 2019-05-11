import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable, from, BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';

const BASE_URL = environment.apiBaseUrl;
const RegisterUser = '/auth/register';

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
        });
    }
}
