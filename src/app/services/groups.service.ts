import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {

    constructor(private apiService: ApiService) {
    }

    public getAuthGroups() {
        this.apiService.get('/users/groups').subscribe(res => {
            return res;
        });
    }

    public createGroup(name) {
        this.apiService.post('/groups/new', {name}).subscribe(res => {
        });
    }
}
