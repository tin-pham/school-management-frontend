import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';

@Component({
  selector: 'app-exercise-detail-header',
  styleUrls: ['exercise-detail-header.component.scss'],
  templateUrl: 'exercise-detail-header.component.html',
})
export class ExerciseDetailHeaderComponent {
  @Input() exercise: ExerciseGetDetailRO;
  @Input() exerciseId: number;
  @Input() selectedQuestionIds: number[];
  @Input() isStudent: boolean;
  @Input() totalItems: number;

  constructor(private dialog: MatDialog) {}

  @Output() onActivateClicked = new EventEmitter();
  activateClicked() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Kích hoạt bài tập này?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onActivateClicked.emit();
    });
  }

  @Output() onRemoveClicked = new EventEmitter();
  removeClicked() {
    this.onRemoveClicked.emit();
  }
}
