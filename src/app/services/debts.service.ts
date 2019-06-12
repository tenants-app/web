import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DebtsService {

    constructor(private apiService: ApiService) {
    }

    public getDebts(groupId: string): Observable<any> {
        return this.apiService.get('/groups/' + groupId + '/debts');
    }

    public fetchGivenLoans(groupId: string): Observable<any> {
        return this.apiService.get('/groups/' + groupId + '/debts/given');
    }

    public createLoan(groupId: string, loanData: object): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/debts', loanData);
    }

    public payDebt(groupId: string, debtId: string): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/debts/' + debtId + '/paid');
    }
}
