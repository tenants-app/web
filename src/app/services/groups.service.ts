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

    public getAuthGroups(): Observable<any> {
        this.apiService.get('/users/groups').subscribe(
            res => {
                this.groups.next(res.groups);
            }
        );
        return this.groups.asObservable();
    }

    public getGroup(id: string): Observable<any> {
        return this.apiService.get('/groups/' + id);
    }

    public getMembers(id: string): Observable<any> {
        return this.apiService.get('/groups/' + id + '/members');
    }

    public createGroup(name: string): Observable<any> {
        return this.apiService.post('/groups/new', {name});
    }

    public joinGroup(token: string): Observable<any> {
        return this.apiService.get('/activate_member/' + token);
    }

    public createInvitation(email: string, groupId: string): Observable<any> {
        const data = {
            email,
            group_id: groupId
        };
        return this.apiService.post('/groups/generate_member_link', data);
    }
}
