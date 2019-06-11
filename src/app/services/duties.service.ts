import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {User} from '../interfaces/IUser';

@Injectable({
    providedIn: 'root'
})
export class DutiesService {

    constructor(private apiService: ApiService) {
    }

    public getDuties(groupId: string): Observable<any> {
        return this.apiService.get('/groups/' + groupId + '/duties');
    }

    public postDuties(groupId: string, length: number, members: User[]): Observable<any> {
        return this.apiService.post('/groups/' + groupId + '/duties', {length, order: members});
    }
}
