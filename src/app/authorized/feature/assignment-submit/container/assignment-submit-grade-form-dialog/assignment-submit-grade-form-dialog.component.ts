import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssignmentSubmitGradeFormComponent } from '../assignment-submit-grade-form/assignment-submit-grade-form.component';

@Component({
  selector: 'app-assignment-submit-grade-form-dialog',
  styleUrls: ['./assignment-submit-grade-form-dialog.component.scss'],
  templateUrl: './assignment-submit-grade-form-dialog.component.html',
})
export class AssignmentSubmitGradeFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AssignmentSubmitGradeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
