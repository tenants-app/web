import {Component, OnInit} from '@angular/core';
import {DebtsService} from '../../../services/debts.service';
import {GroupsService} from '../../../services/groups.service';
import {SnackBarService} from '../../../services/snack-bar.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-given-loans',
    templateUrl: './given-loans.component.html',
    styleUrls: ['./given-loans.component.scss']
})
export class GivenLoansComponent implements OnInit {
    private id: string = this.route.snapshot.paramMap.get('id');
    debts = [];
    members = [];
    displayedColumns: string[] = ['name', 'created by', 'value', 'status', 'date', 'actions'];

    constructor(private debtsService: DebtsService,
                private groupService: GroupsService,
                private snackBar: SnackBarService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.fetchGivenLoans();
    }

    fetchGivenLoans() {
        this.debtsService.fetchGivenLoans(this.id).subscribe(
            (res) => {
                this.debts = res.debts;
            },
        );
    }

    public setAsPaid(holderId) {
        this.debtsService.payDebt(this.id, holderId).subscribe(
            (res) => {
                this.snackBar.show('Debt was set as paid');
                this.fetchGivenLoans();
            }, (err) => {
                this.snackBar.show('There was an error paying the debt');
            }
        );
    }
}
