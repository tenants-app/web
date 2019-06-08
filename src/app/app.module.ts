import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import {GroupsComponent} from './components/groups/groups.component';
import {AuthGuard} from './guards/auth.guard';
import {GuestGuard} from './guards/guest.guard';
import {FormsModule} from '@angular/forms';
import {GroupDialogComponent} from './components/groups/group-dialog/group-dialog.component';
import {GroupComponent} from './components/groups/group/group.component';
import {InvitationDialogComponent} from './components/groups/invitation-dialog/invitation-dialog.component';
import {GroupJoinComponent} from './components/groups/group-join/group-join.component';
import {MembersComponent} from './components/groups/members/members.component';
import {BillsComponent} from './components/bills/bills.component';
import { ShoppingComponent } from './components/shopping/shopping/shopping.component';
import { CreateShoppingListComponent } from './components/shopping/create-shopping-list/create-shopping-list.component';
import { DutiesComponent } from './components/duties/duties/duties.component';
import { DutiesEditionComponent } from './components/duties/duties-edition/duties-edition.component';
import { DebtsComponent } from './components/debts/debts/debts.component';
import { GivenLoansComponent } from './components/debts/given-loans/given-loans.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        GroupsComponent,
        GroupDialogComponent,
        GroupComponent,
        InvitationDialogComponent,
        GroupJoinComponent,
        MembersComponent,
        BillsComponent,
        ShoppingComponent,
        CreateShoppingListComponent,
        DutiesComponent,
        DutiesEditionComponent,
        DebtsComponent,
        GivenLoansComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                whitelistedDomains: ['localhost:3000']
            }
        })
    ],
    providers: [AuthInterceptor,
        AuthGuard,
        GuestGuard],
    bootstrap: [AppComponent],
    entryComponents: [
        GroupDialogComponent,
        InvitationDialogComponent,
    ],
})
export class AppModule {
}
