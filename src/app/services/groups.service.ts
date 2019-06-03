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
                this.groups.next(res.groups);
            }
        );
        return this.groups.asObservable();
    }

    public getGroup(id) {
        return this.apiService.get('/groups/' + id);
    }

    public getMembers(id) {
        return this.apiService.get('/groups/' + id + '/members');
    }

    public createGroup(name): Observable<any> {
        return this.apiService.post('/groups/new', {name});
    }

    public joinGroup(token): Observable<any> {
        return this.apiService.get('/activate_member/');
    }

    public createInvitation(email, groupId): Observable<any> {
        const data = {
            email: email,
            group_id: groupId
        };
        return this.apiService.post('/groups/generate_member_link', data);
    }
}
