import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupsService} from '../../../services/groups.service';
import {DialogService} from '../../../services/dialog.service';
import {User} from '../../../interfaces/IUser';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
    public id: string = this.route.snapshot.paramMap.get('id');
    public displayedColumns: string[] = ['username', 'bank_account_number', 'action'];
    public members: User[] = [];

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute,
                private dialogService: DialogService) {
    }

    public ngOnInit() {
        this.groupsService.getMembers(this.id).subscribe(
            (res) => {
                this.members = res.members;
            },
        );
    }

    public openGroupDialog(): void {
        this.dialogService.groupInvitationDialog(this.id);
    }

}
