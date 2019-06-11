import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../../services/groups.service';
import {SnackBarService} from '../../../services/snack-bar.service';

@Component({
    selector: 'app-group-dialog',
    templateUrl: './group-dialog.component.html',
    styleUrls: ['./group-dialog.component.scss']
})
export class GroupDialogComponent {
    public loadingSpinner = false;
    public groupForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
    });

    constructor(private groupsService: GroupsService,
                private snackBar: SnackBarService,
                public dialogRef: MatDialogRef<GroupDialogComponent>) {
    }

    public onCreation(): void {
        if (!!this.groupForm.invalid) {
            return;
        }
        this.loadingSpinner = true;
        this.groupsService.createGroup(this.groupForm.value.name).subscribe(res => {
            this.confirmAndClose();
        });
    }

    public confirmAndClose(): void {
        this.loadingSpinner = false;
        this.snackBar.show('Apartment group created');
        this.groupsService.getAuthGroups();
        this.dialogRef.close();
    }
}
