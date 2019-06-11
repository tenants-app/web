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
    public displayedColumns: string[] = ['username', 'bank_account_number', 'action'];
    public members: User[] = [];

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute,
                private dialogService: DialogService) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.groupsService.getMembers(id).subscribe(
            (res) => {
                this.members = res.members;
            },
        );
    }

    public openGroupDialog() {
        this.dialogService.groupInvitationDialog(this.route.snapshot.paramMap.get('id'));
    }

}
