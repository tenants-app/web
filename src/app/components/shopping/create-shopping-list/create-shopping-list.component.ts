import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShoppingService} from '../../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-create-shopping-list',
    templateUrl: './create-shopping-list.component.html',
    styleUrls: ['./create-shopping-list.component.scss']
})
export class CreateShoppingListComponent implements OnInit {
    name = new FormControl('', [Validators.minLength(3), Validators.maxLength(30)]);

    item = new FormGroup({
        name: new FormControl('', [Validators.minLength(1), Validators.maxLength(30)]),
        price: new FormControl('', [Validators.required]),
    });
    items = [];

    constructor(private shoppingService: ShoppingService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    submitList() {
        const id = this.route.snapshot.paramMap.get('id');
        this.shoppingService.postShoppingList(id, this.name.value, this.items).subscribe(
            (res) => {
            }
        );
    }

    addItem() {
        this.items.push(this.item.value);
    }

    removeItem(index) {
        this.items = this.items.slice(0, index).concat(this.items.slice(index + 1, this.items.length));
    }
}
