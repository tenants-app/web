import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class BillsService {

    constructor(private apiService: ApiService) {
    }

    public getBills(groupId) {
        return this.apiService.get('/groups/' + groupId + '/bills');
    }

    public createBill(groupId, billData) {
        return this.apiService.post('/groups/' + groupId + '/bills', billData);
    }

    public payBill(groupId, billId) {
        return this.apiService.post('/groups/' + groupId + '/bills/' + billId + '/paid');
    }
}
