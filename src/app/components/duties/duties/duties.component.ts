import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DutiesService} from '../../../services/duties.service';
import * as moment from 'moment';
import {Duty} from '../../../interfaces/IDuty';

@Component({
    selector: 'app-duties',
    templateUrl: './duties.component.html',
    styleUrls: ['./duties.component.scss']
})
export class DutiesComponent implements OnInit {
    private id: string = this.route.snapshot.paramMap.get('id');
    public duties: Duty[] = [];
    public displayedColumns: string[] = ['user', 'date', 'turn'];
    public today: string = moment().format('YYYY-MM-DD');

    constructor(private dutiesService: DutiesService,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.dutiesService.getDuties(this.id).subscribe(
            (res) => {
                this.duties = res.duties;
            },
        );
    }
}
