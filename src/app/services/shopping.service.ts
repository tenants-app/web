import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})

export class ShoppingService {

    constructor(private apiService: ApiService) {
    }

    public getShoppingList(groupId) {
        return this.apiService.get('/groups/' + groupId + '/shopping');
    }

    public postShoppingList(groupId, listName, items) {
        console.log(items);
        return this.apiService.post('/groups/' + groupId + '/shopping', {items: items, name: listName});
    }
}
