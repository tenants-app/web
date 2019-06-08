import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DutiesService} from '../../services/duties.service';
import * as moment from 'moment';

@Component({
    selector: 'app-duties',
    templateUrl: './duties.component.html',
    styleUrls: ['./duties.component.scss']
})
export class DutiesComponent implements OnInit {
    duties = [];
    displayedColumns: string[] = ['user', 'date', 'turn'];
    today: string = moment().format('YYYY-MM-DD');
    id = this.route.snapshot.paramMap.get('id');

    constructor(private dutiesService: DutiesService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.dutiesService.getDuties(this.id).subscribe(
            (res) => {
                this.duties = res.duties;
            },
        );
    }
}
