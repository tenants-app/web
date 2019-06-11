import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {DutiesService} from '../../../services/duties.service';
import {SnackBarService} from '../../../services/snack-bar.service';
import {User} from '../../../interfaces/IUser';

@Component({
    selector: 'app-duties-edition',
    templateUrl: './duties-edition.component.html',
    styleUrls: ['./duties-edition.component.scss']
})
export class DutiesEditionComponent implements OnInit {
    private id: string = this.route.snapshot.paramMap.get('id');
    public length = new FormControl('');
    public members: User[] = [];

    constructor(private groupsService: GroupsService,
                private dutiesService: DutiesService,
                private route: ActivatedRoute,
                private router: Router,
                private snackBar: SnackBarService) {
    }

    public ngOnInit() {
        this.groupsService.getMembers(this.id).subscribe(
            (res) => {
                this.members = res.members;
            },
        );
    }


    public submit(): void {
        if (Number.isInteger(this.length.value)) {
            this.dutiesService.postDuties(this.id, this.length.value, this.members).subscribe((res) => {
                this.snackBar.show('Duties were saved');
                this.router.navigate(['/group/' + this.id]);
            }, (err) => {
                this.snackBar.show('Could not save duties');
                this.router.navigate(['/group/' + this.id]);
            });
        } else {
            this.snackBar.show('Cycle length must be integer');
        }
    }

    public moveUp(index: number): void {
        if (index !== 0) {
            const firstElement = this.members[index];
            this.members[index] = this.members[index - 1];
            this.members[index - 1] = firstElement;
        }
    }

    public moveDown(index: number): void {
        if (index !== this.members.length - 1) {
            const firstElement = this.members[index];
            this.members[index] = this.members[index + 1];
            this.members[index + 1] = firstElement;
        }
    }
}
