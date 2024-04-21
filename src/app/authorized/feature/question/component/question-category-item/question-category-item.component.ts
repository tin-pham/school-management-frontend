import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { QuestionCategoryGetListDataRO } from '@shared/models/ro/question-category.ro';

@Component({
  selector: 'app-question-category-item',
  styleUrls: ['question-category-item.component.scss'],
  templateUrl: 'question-category-item.component.html',
})
export class QuestionCategoryItemComponent {
  constructor(private dialog: MatDialog) {}

  @Input() questionCategory: QuestionCategoryGetListDataRO;
  @Output() onDelete = new EventEmitter();
  delete(event: Event) {
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
}
