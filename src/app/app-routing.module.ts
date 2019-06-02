import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GroupsComponent} from './groups/groups.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './guards/auth.guard';
import {GuestGuard} from './guards/guest.guard';
import {GroupComponent} from './groups/group/group.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
    {path: 'register', component: RegistrationComponent, canActivate: [GuestGuard]},
    {path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]},
    {path: 'group/:id', component: GroupComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '/groups'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
