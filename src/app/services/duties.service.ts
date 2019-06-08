import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DutiesService {

    constructor(private apiService: ApiService) {
    }

    public getDuties(groupId) {
        return this.apiService.get('/groups/' + groupId + '/duties');
    }

    public postDuties(groupId, length, members) {
        return this.apiService.post('/groups/' + groupId + '/duties', {length, order: members});
    }
}
