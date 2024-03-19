import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { ExerciseGetListDataRO } from '@shared/models/ro/exercise.ro';

@Component({
  selector: 'app-exercise-item',
  styleUrls: ['exercise-item.component.scss'],
  templateUrl: 'exercise-item.component.html',
})
export class ExerciseItemComponent {
  @Input() exercise: ExerciseGetListDataRO;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

  @Output() onDelete = new EventEmitter<void>();

  delete(event) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

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

  isStudent() {
    return this._authService.isStudent();
  }

  isLate() {
    return this.exercise.isSubmissionLate;
  }

  isMissing() {
    const dueDate = new Date(this.exercise.dueDate);
    const currentDate = new Date();
    return !this.exercise.isSubmitted && currentDate > dueDate;
  }
}
