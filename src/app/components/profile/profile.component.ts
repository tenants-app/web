import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../interfaces/IUser';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    protected id: string = this.route.snapshot.paramMap.get('id');
    protected userId: string = this.route.snapshot.paramMap.get('userId');
    public user: User = null;

    constructor(private groupsService: GroupsService,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.fetchUser();
    }

    protected fetchUser(): void {
        this.groupsService.getUser(this.id, this.userId).subscribe((res) => {
            this.user = res.member;
        });
    }

}
