import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../services/groups.service';

@Component({
    selector: 'app-group-dialog',
    templateUrl: './group-dialog.component.html',
    styleUrls: ['./group-dialog.component.scss']
})
export class GroupDialogComponent implements OnInit {
    public loadingSpinner = false;

    groupForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
    });

    constructor(private groupsService: GroupsService,
                public dialogRef: MatDialogRef<GroupDialogComponent>) {
    }
    ngOnInit() {
    }

    onCreation() {
        if (!!this.groupForm.invalid) {
            return;
        }
        this.loadingSpinner = true;
        this.groupsService.createGroup(this.groupForm.value.name);
        // this.auth.login(email, password).subscribe(
        //     () => {
        this.confirmAndClose();
        //     },
        //     (err) => {
        //       this.loadingSpinner = false;
        //       this.loginError = err;
        //     }
        // );
    }

    confirmAndClose() {
        this.loadingSpinner = false;
        this.dialogRef.close();
    }
}
