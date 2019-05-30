import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthGuard} from './auth.guard';

@Injectable()
export class GuestGuard extends AuthGuard {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.auth.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['*']);
            return false;
        }
    }
}
