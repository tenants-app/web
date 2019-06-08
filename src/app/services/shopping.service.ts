import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})

export class ShoppingService {

    constructor(private apiService: ApiService) {
    }

    public getShoppingList(groupId) {
        return this.apiService.get('/groups/' + groupId + '/shoppingLists');
    }

    public postShoppingList(groupId, listName, items) {
        return this.apiService.post('/groups/' + groupId + '/shoppingLists', {items, name: listName});
    }
}
