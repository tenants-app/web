import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {GroupsComponent} from './components/groups/groups.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthGuard} from './guards/auth.guard';
import {GuestGuard} from './guards/guest.guard';
import {GroupComponent} from './components/groups/group/group.component';
import {GroupJoinComponent} from './components/groups/group-join/group-join.component';
import {CreateShoppingListComponent} from './components/shopping/create-shopping-list/create-shopping-list.component';
import {DutiesEditionComponent} from './components/duties/duties-edition/duties-edition.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
    {path: 'register', component: RegistrationComponent, canActivate: [GuestGuard]},
    {path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]},
    {path: 'group/:id', component: GroupComponent, canActivate: [AuthGuard]},
    {path: 'group/join/:token', component: GroupJoinComponent},
    {path: 'group/:id/shopping', component: CreateShoppingListComponent, canActivate: [AuthGuard]},
    {path: 'group/:id/duties', component: DutiesEditionComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '/groups'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
