import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    userData = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    public login(): void {
        this.authService.login(this.userData.value);
    }
}
