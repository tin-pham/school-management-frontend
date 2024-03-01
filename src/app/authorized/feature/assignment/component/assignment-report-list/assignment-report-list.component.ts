import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { AssignmentSubmitGetListDataRO } from '@shared/models/ro/assignment-submit.ro';

@Component({
  selector: 'app-assignment-report-list',
  styleUrls: ['./assignment-report-list.component.scss'],
  templateUrl: './assignment-report-list.component.html',
})
export class AssignmentReportListComponent {
  @Input() submissions: AssignmentSubmitGetListDataRO[] = [];

  options: ISelectOption[] = [
    {
      label: 'Đã nộp',
      value: 'submitted',
    },
    {
      label: 'Nộp đúng',
      value: 'isCorrect',
    },
    {
      label: 'Chưa nộp',
      value: 'pending',
    },
    {
      label: 'Nộp trễ',
      value: 'isLate',
    },
  ];

  @Output() onOptionChange = new EventEmitter<string>();
  optionChange(value: string) {
    this.onOptionChange.emit(value);
  }
}
