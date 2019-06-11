import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../../services/auth.service';
import {GroupsService} from '../../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackBarService} from '../../../services/snack-bar.service';

@Component({
    selector: 'app-group-join',
    templateUrl: './group-join.component.html',
    styleUrls: ['./group-join.component.scss']
})
export class GroupJoinComponent implements OnInit {
    public isLoggedIn$: Observable<boolean>;

    constructor(private authService: AuthService,
                private groupsService: GroupsService,
                private router: Router,
                private snackBar: SnackBarService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        if (this.isLoggedIn$) {
            this.groupsService.joinGroup(this.route.snapshot.paramMap.get('token')).subscribe((res) => {
                this.snackBar.show('Joined the group');
                this.router.navigate(['/']);
            }, (err) => {
                this.router.navigate(['/']);
                this.snackBar.show('Wrong address');
            });
        }
    }

}
