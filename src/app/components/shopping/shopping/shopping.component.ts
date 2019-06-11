import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';
import {ShoppingList} from '../../../interfaces/IShoppingList';
import {SnackBarService} from '../../../services/snack-bar.service';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
    protected id: string = this.route.snapshot.paramMap.get('id');
    public shoppingLists: ShoppingList[] = [];
    public displayedColumns: string[] = ['name', 'created by', 'you owe', 'status', 'date', 'actions'];
    public userId: string = null;

    constructor(private shoppingService: ShoppingService,
                private authService: AuthService,
                private route: ActivatedRoute,
                private snackBar: SnackBarService) {
    }

    public ngOnInit() {
        this.userId = this.authService.currentUser$.value.id;
        this.fetchShoppingLists();
    }

    protected fetchShoppingLists(): void {
        this.shoppingService.getShoppingList(this.id).subscribe(
            (res) => {
                this.shoppingLists = res.shoppingLists;
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

    public payShopping(listId: string): void {
        this.shoppingService.payShoppingList(this.id, listId).subscribe((res) => {
            this.snackBar.show('Shopping list got paid');
            this.fetchShoppingLists();
        }, (err) => {
            this.snackBar.show('There was an error paying for shopping');
        });
    }
}
