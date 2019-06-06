import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DutiesService} from '../../services/duties.service';

@Component({
    selector: 'app-duties-edition',
    templateUrl: './duties-edition.component.html',
    styleUrls: ['./duties-edition.component.scss']
})
export class DutiesEditionComponent implements OnInit {
    id = this.route.snapshot.paramMap.get('id');
    dutyData = new FormGroup({
        member: new FormControl('', Validators.required),
        duty: new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]),
    });
    members = [];
    duties = [];

    constructor(private groupsService: GroupsService,
                private dutiesSerivce: DutiesService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.groupsService.getMembers(this.id).subscribe(
            (res) => {
                this.members = res.members;
            },
        );
    }

    addDuty() {
        this.duties.push(this.dutyData.value);
    }

    removeItem(index) {
        this.duties = this.duties.slice(0, index).concat(this.duties.slice(index + 1, this.duties.length));
    }

    submit() {
        this.dutiesSerivce.postDuties(this.id, this.duties).subscribe(
            (res) => {
                console.log(res);
            },
        );
    }
}
