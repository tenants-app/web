import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../../interfaces/IGroup';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
})

export class GroupComponent implements OnInit {
    public group: Group;

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute,
                private router: Router) {
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
}
