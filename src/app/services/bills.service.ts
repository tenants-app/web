import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BillsService {

    constructor(private apiService: ApiService) {
    }

    public getBills(groupId: string): Observable<any> {
        return this.apiService.get('/groups/' + groupId + '/bills');
    }

    public createBill(groupId: string, billData: object): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/bills', billData);
    }

    public payBill(groupId: string, billId: string): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/bills/' + billId + '/paid');
    }
}
