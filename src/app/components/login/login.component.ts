import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public userData = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
    });

    constructor(private authService: AuthService,
                private router: Router) {
    }

    public login(): void {
        this.authService.login(this.userData.value);
        this.router.navigate(['/']);
    }

}
