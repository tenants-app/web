import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../../../interfaces/IShoppingList';
import {ShoppingService} from '../../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';
import {SnackBarService} from '../../../services/snack-bar.service';
import {Product} from '../../../interfaces/IProduct';

@Component({
    selector: 'app-shopping-details',
    templateUrl: './shopping-details.component.html',
    styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent implements OnInit {
    protected id: string = this.route.snapshot.paramMap.get('id');
    public shoppingLists: ShoppingList = null;
    public products: Product[] = [];
    public displayedProductsColumns: string[] = ['name', 'value'];
    public displayedColumns: string[] = ['name', 'created by', 'value', 'you owe', 'status', 'date', 'actions'];

    constructor(private shoppingService: ShoppingService,
                private route: ActivatedRoute,
                private snackBar: SnackBarService) {
    }

    ngOnInit() {
        this.fetchShoppingLists();
    }

    public fetchShoppingLists() {
        this.shoppingService.getShoppingList(this.id).subscribe(
            (res) => {
                this.shoppingLists = res.shoppingLists[0];
                this.products = this.shoppingLists.products;
            },
        );
    }

    public payShopping(listId) {
        this.shoppingService.payShoppingList(this.id, listId).subscribe((res) => {
            this.snackBar.show('Shopping got paid');
            this.fetchShoppingLists();
        }, (err) => {
            this.snackBar.show('There was an error paying for shopping');
        });
    }

}
