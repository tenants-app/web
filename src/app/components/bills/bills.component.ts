import {Component, OnInit} from '@angular/core';
import {BillsService} from '../../services/bills.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../services/snack-bar.service';
import {Bill} from '../../interfaces/IBill';

@Component({
    selector: 'app-bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
    private id: string = this.route.snapshot.paramMap.get('id');
    public bills: Bill[] = [];
    public billCreation = false;
    public billData = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
        value: new FormControl('', [Validators.minLength(1), Validators.maxLength(10)]),
    });
    public displayedColumns: string[] = ['name', 'created by', 'value', 'you owe', 'status', 'date', 'actions'];

    constructor(private billsService: BillsService,
                private snackBar: SnackBarService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.fetchBills();
    }

    public fetchBills() {
        this.billsService.getBills(this.id).subscribe(
            (res) => {
                this.bills = res.bills;
            },
        );
    }

    public saveBill() {
        this.billsService.createBill(this.id, this.billData.value).subscribe(
            (res) => {
                this.snackBar.show(' got created');
                this.billCreation = false;
                this.fetchBills();
            }, (err) => {
                this.snackBar.show('There was an error creating the bill');
            }
        );
    }

    public payBill(billId) {
        this.billsService.payBill(this.id, billId).subscribe(
            (res) => {
                this.snackBar.show(' got paid');
                this.fetchBills();
            }, (err) => {
                this.snackBar.show('There was an error paying the bill');
            }
        );
    }
}
