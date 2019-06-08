import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatChipsModule,
    MatAutocompleteModule, MatTabsModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatListModule,
        MatTableModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatTabsModule
    ]
})
export class MaterialModule {
}
