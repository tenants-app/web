import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {DialogService} from '../../services/dialog.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    public groups$: Observable<object>;

    constructor(private groupsService: GroupsService, private dialogService: DialogService) {
    }

    public ngOnInit() {
        this.groups$ = this.groupsService.getAuthGroups();
    }

    public openGroupDialog(): void {
        this.dialogService.groupDialog();
    }
}
