import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Observable} from 'rxjs';
import {SnackBarService} from './services/snack-bar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;

    constructor(
        private authService: AuthService,
        private snackBar: SnackBarService) {
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }

    onLogout() {
        this.authService.logout();
        this.snackBar.show('Logged out');
    }
}

