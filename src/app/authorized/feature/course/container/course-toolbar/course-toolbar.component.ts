import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-course-toolbar',
  styleUrls: ['course-toolbar.component.scss'],
  templateUrl: 'course-toolbar.component.html',
})
export class CourseToolbarComponent {
  @Input() categoryId: number;
  @Input() isYourCategory: boolean;

  @Output() delete = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  onDelete() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.delete.emit();
    });
  }

  @Output() addCourse = new EventEmitter<void>();

  onAddCourse() {
    this.addCourse.emit();
  }
}
