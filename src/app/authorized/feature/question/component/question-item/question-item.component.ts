import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IQuestionOptionStatus } from '../question-option/question-option.component';

@Component({
  selector: 'app-question-item',
  styleUrls: ['question-item.component.scss'],
  templateUrl: 'question-item.component.html',
})
export class QuestionItemComponent {
  @Input() question: QuestionGetListDataRO;
  @Input() showCheckBox = false;
  @Input() showTrash = true;
  @Input() showEdit = true;

  IQuestionOptionStatus = IQuestionOptionStatus;

  constructor(private dialog: MatDialog) {}

  @Output() onDeleteClick = new EventEmitter<number>();
  deleteClick() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDeleteClick.emit(this.question.id);
    });
  }

  @Output() onEditClick = new EventEmitter<number>();
  editClick() {
    this.onEditClick.emit(this.question.id);
  }

  @Output() onCheckBoxChange = new EventEmitter<boolean>();
  checkBoxChange(event: MatCheckboxChange) {
    this.onCheckBoxChange.emit(event.checked);
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }
}
