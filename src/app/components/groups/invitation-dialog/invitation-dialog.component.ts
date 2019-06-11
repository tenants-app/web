import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../../services/groups.service';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-invitation-dialog',
    templateUrl: './invitation-dialog.component.html',
    styleUrls: ['./invitation-dialog.component.scss']
})
export class InvitationDialogComponent {
    public loadingSpinner = false;
    public link = '';

    groupForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    constructor(private groupsService: GroupsService,
                public dialogRef: MatDialogRef<InvitationDialogComponent>) {
    }

    onCreation() {
        if (!!this.groupForm.invalid) {
            return;
        }
        this.loadingSpinner = true;
        this.groupsService.createInvitation(this.groupForm.value.email, this.dialogRef.id).subscribe(res => {
            this.loadingSpinner = false;
            this.link = res.link;
            this.loadingSpinner = false;
        });
    }

    myFunction() {
        const copyText = document.getElementById('linkText') as HTMLInputElement;
        copyText.select();
        document.execCommand('copy');
    }

    close() {
        this.dialogRef.close();
    }
}
