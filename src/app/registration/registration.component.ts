import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    userData = new FormGroup({
        username: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        bank_account_number: new FormControl('', [Validators.minLength(26), Validators.maxLength(26)]),
        password: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
        confirmPassword: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    public register(): void {
        this.authService.register(this.userData.value);
    }
}
