import {Component, OnInit} from '@angular/core';
import {BillsService} from '../../services/bills.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../services/snack-bar.service';
import {Bill} from '../../interfaces/IBill';
import {AuthService} from '../../services/auth.service';

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
    public userId: string = null;

    constructor(private billsService: BillsService,
                private authService: AuthService,
                private snackBar: SnackBarService,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.userId = this.authService.currentUser$.value.id;
        this.fetchBills();
    }

    protected fetchBills(): void {
        this.billsService.getBills(this.id).subscribe(
            (res) => {
                this.bills = res.bills;
            },
        );
    }

    public isDebtPaid(debtors): any {
        for (let i = 0; i < debtors.length; i++) {
            if (debtors[i].user === this.userId) {
                return debtors[i].paid;
            }
        }
        return false;
    }

    public getDebtValue(debtors): any {
        for (let i = 0; i < debtors.length; i++) {
            if (debtors[i].user === this.userId) {
                return debtors[i].value;
            }
        }
        return false;
    }

    public saveBill(): void {
        this.billsService.createBill(this.id, this.billData.value).subscribe(
            (res) => {
                this.snackBar.show('Bill got created');
                this.billCreation = false;
                this.fetchBills();
            }, (err) => {
                this.snackBar.show('There was an error creating the bill');
            }
        );
    }

    public payBill(billId: string): void {
        this.billsService.payBill(this.id, billId).subscribe(
            (res) => {
                this.snackBar.show('Bill got paid');
                this.fetchBills();
            }, (err) => {
                this.snackBar.show('There was an error paying the bill');
            }
        );
    }
}
