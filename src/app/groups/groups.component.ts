import {Component, OnInit, Inject} from '@angular/core';
import {GroupsService} from '../services/groups.service';
import {DialogService} from '../services/dialog.service';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    groups;

    constructor(private groupsService: GroupsService, private dialogService: DialogService) {
    }
    ngOnInit() {
    }

    public getGroups() {
        this.groups = this.groupsService.getAuthGroups();
    }
    public openGroupDialog() {
        this.dialogService.groupDialog();
    }
}
