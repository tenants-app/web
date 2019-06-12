import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../../interfaces/IGroup';
import {SnackBarService} from '../../../services/snack-bar.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
})

export class GroupComponent implements OnInit {
    protected id: string = this.route.snapshot.paramMap.get('id');
    public group: Group;
    public confirmation = false;

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute,
                private router: Router,
                private snackBar: SnackBarService) {
    }

    public ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.groupsService.getGroup(id).subscribe(
            (res) => {
                this.group = res.group;
            },
            (err) => {
                this.router.navigate(['/']);
            }
        );
    }

    public leaveGroup() {
        this.groupsService.leaveGroup(this.id).subscribe((res) => {
            this.snackBar.show('You left the group');
            this.router.navigate(['/']);
        }, (err) => {
            this.snackBar.show('There was an error leaving the group');
        });
    }
}
