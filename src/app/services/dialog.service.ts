import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {GroupDialogComponent} from '../components/groups/group-dialog/group-dialog.component';
import {InvitationDialogComponent} from '../components/groups/invitation-dialog/invitation-dialog.component';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) {
    }

    public groupDialog(): Observable<any> {
        let dialogRef: MatDialogRef<GroupDialogComponent>;
        dialogRef = this.dialog.open(GroupDialogComponent);

        return dialogRef.beforeClosed();
    }

    public groupInvitationDialog(id: string): Observable<any> {
        let dialogRef: MatDialogRef<InvitationDialogComponent>;
        dialogRef = this.dialog.open(InvitationDialogComponent, {id});

        return dialogRef.beforeClosed();
    }
}
