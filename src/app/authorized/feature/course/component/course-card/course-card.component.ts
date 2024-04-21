import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-card',
  styleUrls: ['course-card.component.scss'],
  templateUrl: 'course-card.component.html',
})
export class CourseCardComponent {
  @Input() isEdit: boolean;
  @Input() option: IImageCardOption;
  @Input() course: CourseGetListDataRO;
  @Input() assignmentIcon = true;
  @Input() showStudentCount = true;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

  @Output() onDelete = new EventEmitter();
  delete(event: MouseEvent) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xác nhận xóa khóa học?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDelete.emit();
    });
    event.stopPropagation();
  }

  @Output() onRemove = new EventEmitter();
  remove(event: MouseEvent) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xác nhận xóa khóa học khỏi danh mục này?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onRemove.emit();
    });

    event.stopPropagation();
  }

  @Output() onAssignmentClick = new EventEmitter();
  assignmentClick(event) {
    this.onAssignmentClick.emit();
    event.stopPropagation();
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
