import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../../../interfaces/IShoppingList';
import {ShoppingService} from '../../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';
import {SnackBarService} from '../../../services/snack-bar.service';
import {Product} from '../../../interfaces/IProduct';
import {User} from '../../../interfaces/IUser';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-shopping-details',
    templateUrl: './shopping-details.component.html',
    styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent implements OnInit {
    protected id: string = this.route.snapshot.paramMap.get('id');
    protected listId: string = this.route.snapshot.paramMap.get('listId');
    public products: Product[] = [];
    public debtors: User[] = [];
    public shoppingList: ShoppingList = null;
    public loading = false;
    public productsColumns: string[] = ['name', 'value'];
    public membersColumns: string[] = ['name', 'value', 'status', 'actions'];
    public userId: string = null;

    constructor(private shoppingService: ShoppingService,
                private authService: AuthService,
                private route: ActivatedRoute,
                private snackBar: SnackBarService) {
    }

    public ngOnInit() {
        this.fetchShoppingList();
        this.userId = this.authService.currentUser$.value.id;
    }

    protected fetchShoppingList(): void {
        this.loading = true;
        this.shoppingService.getShoppingListDetails(this.id, this.listId).subscribe(
            (res) => {
                this.shoppingList = res.shoppingList;
                this.products = res.shoppingList.products;
                this.debtors = res.shoppingList.debtors;
                this.loading = false;
            }, (err) => {
                this.loading = false;
            }
        );
    }

    public payShopping(): void {
        this.shoppingService.payShoppingList(this.id, this.listId).subscribe((res) => {
            this.snackBar.show('Shopping got paid');
            this.fetchShoppingList();
        }, (err) => {
            this.snackBar.show('There was an error paying for shopping');
        });
    }

}
