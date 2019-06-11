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

    public getUser(id: string, userId: string): Observable<any> {
        return this.apiService.get('/groups/' + id + '/members/' + userId);
    }

    public createGroup(name: string): Observable<any> {
        return this.apiService.post('/groups/new', {name});
    }

    public joinGroup(token: string): Observable<any> {
        return this.apiService.get('/activate_members/' + token);
    }

    public createInvitation(email: string, groupId: string): Observable<any> {
        const data = {
            email,
            group_id: groupId
        };
        return this.apiService.post('/groups/generate_member_link', data);
    }

    public sendInvitation(email: string, link: string): Observable<any> {
        return this.apiService.post('/groups/send_member_link', {email, link});
    }
}
