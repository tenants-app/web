import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../../services/groups.service';
import {MatDialogRef} from '@angular/material';
import {SnackBarService} from '../../../services/snack-bar.service';

@Component({
    selector: 'app-invitation-dialog',
    templateUrl: './invitation-dialog.component.html',
    styleUrls: ['./invitation-dialog.component.scss']
})
export class InvitationDialogComponent {
    public loadingSpinner = false;
    public link = '';
    public groupForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
    });
    public blockButton = false;

    constructor(private groupsService: GroupsService,
                public dialogRef: MatDialogRef<InvitationDialogComponent>,
                public snackBar: SnackBarService) {
    }

    public onCreation() {
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

    public copyLink(): void {
        const copyText = document.getElementById('linkText') as HTMLInputElement;
        copyText.select();
        document.execCommand('copy');
    }

    public close(): void {
        this.dialogRef.close();
    }

    public sendEmail(): void {
        this.groupsService.sendInvitation(this.groupForm.value.email, this.link).subscribe((res) => {
            this.snackBar.show('Invitation email will be sent');
            this.blockButton = true;
        });
    }
}
