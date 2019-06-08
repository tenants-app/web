import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {DutiesService} from '../../services/duties.service';
import {SnackBarService} from '../../services/snack-bar.service';

@Component({
    selector: 'app-duties-edition',
    templateUrl: './duties-edition.component.html',
    styleUrls: ['./duties-edition.component.scss']
})
export class DutiesEditionComponent implements OnInit {
    id = this.route.snapshot.paramMap.get('id');
    length = new FormControl('');
    members = [];

    constructor(private groupsService: GroupsService,
                private dutiesService: DutiesService,
                private route: ActivatedRoute,
                private router: Router,
                private snackBar: SnackBarService) {
    }

    ngOnInit() {
        this.groupsService.getMembers(this.id).subscribe(
            (res) => {
                this.members = res.members;
            },
        );
    }


    submit() {
        if (Number.isInteger(this.length.value)) {
            this.dutiesService.postDuties(this.id, this.length.value, this.members).subscribe((res) => {
                this.snackBar.show('Duties were saved');
                this.router.navigate(['/group/' + this.id]);
            }, (err) => {
                this.snackBar.show('Could not save duties');
                // this.router.navigate(['/group/' + this.id]);
            });
        } else {
            this.snackBar.show('Cycle length must be integer');
        }
    }

    moveUp(index) {
        if (index !== 0) {
            const firstElement = this.members[index];
            this.members[index] = this.members[index - 1];
            this.members[index - 1] = firstElement;
        }
    }

    moveDown(index) {
        if (index !== this.members.length - 1) {
            const firstElement = this.members[index];
            this.members[index] = this.members[index + 1];
            this.members[index + 1] = firstElement;
        }
    }
}
