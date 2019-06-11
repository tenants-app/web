import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Product} from '../interfaces/IProduct';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShoppingService {

    constructor(private apiService: ApiService) {
    }

    public getShoppingList(groupId: string): Observable<any> {
        return this.apiService.get('/groups/' + groupId + '/shoppingLists');
    }

    public postShoppingList(groupId: string, listName: string, items: Product[]): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/shoppingLists', {products: items, name: listName});
    }

    public payShoppingList(groupId: string, listId: string): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/shoppingLists/' + listId + '/paid');
    }
}
