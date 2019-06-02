import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../services/groups.service';
import {SnackBarService} from '../../services/snack-bar.service';

@Component({
    selector: 'app-group-dialog',
    templateUrl: './group-dialog.component.html',
    styleUrls: ['./group-dialog.component.scss']
})
export class GroupDialogComponent {
    public loadingSpinner = false;

    groupForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
    });

    constructor(private groupsService: GroupsService,
                private snackBar: SnackBarService,
                public dialogRef: MatDialogRef<GroupDialogComponent>) {
    }

    onCreation() {
        if (!!this.groupForm.invalid) {
            return;
        }
        this.loadingSpinner = true;
        this.groupsService.createGroup(this.groupForm.value.name).subscribe(res => {
            this.confirmAndClose();
        });
    }

    confirmAndClose() {
        this.loadingSpinner = false;
        this.snackBar.show('Utworzono grupę');
        this.groupsService.getAuthGroups();
        this.dialogRef.close();
    }
}
