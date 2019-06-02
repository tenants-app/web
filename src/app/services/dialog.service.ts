import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {GroupDialogComponent} from '../groups/group-dialog/group-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) {
    }

    public groupDialog() {
        let dialogRef: MatDialogRef<GroupDialogComponent>;
        dialogRef = this.dialog.open(GroupDialogComponent);

        return dialogRef.beforeClosed();
    }
}
