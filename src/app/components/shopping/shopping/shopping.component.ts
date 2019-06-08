import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

    id = this.route.snapshot.paramMap.get('id');

    constructor(private shoppingService: ShoppingService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.shoppingService.getShoppingList(this.id).subscribe(
            (res) => {
            },
        );
    }

}
