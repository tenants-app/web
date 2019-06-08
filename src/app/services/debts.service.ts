import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DebtsService {

    constructor(private apiService: ApiService) {
    }

    public getDebts(groupId) {
        return this.apiService.get('/groups/' + groupId + '/debts');
    }

    public fetchGivenLoans(groupId) {
        return this.apiService.get('/groups/' + groupId + '/debts/given');
    }

    public createLoan(groupId, loanData) {
        return this.apiService.post('/groups/' + groupId + '/debts', loanData);
    }

    public payDebt(groupId, debtId) {
        return this.apiService.post('/groups/' + groupId + '/debts/' + debtId + '/paid');
    }
}
