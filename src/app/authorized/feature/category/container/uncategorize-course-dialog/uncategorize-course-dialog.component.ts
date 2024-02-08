import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseGetListRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-uncategorize-course-dialog',
  styleUrls: ['uncategorize-course-dialog.component.scss'],
  templateUrl: 'uncategorize-course-dialog.component.html',
})
export class UncategorizeCourseDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<UncategorizeCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) coursePaginated: CourseGetListRO,
  ) {}

  close() {
    this.dialogRef.close();
  }
}
