import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {

    private groups = new BehaviorSubject<object>([]);

    constructor(private apiService: ApiService) {
    }

    public getAuthGroups() {
        this.apiService.get('/users/groups').subscribe(
            res => {
                this.groups.next(res);
            }
        );
        return this.groups.asObservable();
    }

    public createGroup(name): Observable<any> {
        return this.apiService.post('/groups/new', {name});
    }
}
