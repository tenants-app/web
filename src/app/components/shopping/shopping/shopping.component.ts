import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';
import {ShoppingList} from '../../../interfaces/IShoppingList';
import {SnackBarService} from '../../../services/snack-bar.service';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
    protected id: string = this.route.snapshot.paramMap.get('id');
    public shoppingLists: ShoppingList[] = [];
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
                this.shoppingLists = res.shoppingLists;
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
