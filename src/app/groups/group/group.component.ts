import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../services/dialog.service';

const ELEMENT_DATA = [
    {name: 'Jan Kowalski', bankAccount: '45521455214552145521455218'},
    {name: 'Jan Kowalski', bankAccount: '45521455214552145521455218'},
    {name: 'Jan Kowalski', bankAccount: '45521455214552145521455218'},
    {name: 'Jan Kowalski', bankAccount: '45521455214552145521455218'},
];

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})

export class GroupComponent implements OnInit {
    group;
    dataSource = ELEMENT_DATA;
    displayedColumns: string[] = ['name', 'bankAccount', 'action'];

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute,
                private router: Router,
                private dialogService: DialogService) {
    }

    ngOnInit() {
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

    public openGroupDialog() {
        this.dialogService.groupInvitationDialog(this.route.snapshot.paramMap.get('id'));
    }
}
