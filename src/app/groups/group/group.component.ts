import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
    group;

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.group = this.groupsService.getGroup(id).subscribe(
            (res) => {
                return res.group;
            },
            (err) => {
                this.router.navigate(['/']);
            }
        );
    }
}
