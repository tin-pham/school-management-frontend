import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MtxCalendarView, MtxDatetimepickerMode, MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrl: 'date-time-picker.component.scss',
})
export class DateTimePickerComponent {
  type: MtxDatetimepickerType = 'datetime';
  mode: MtxDatetimepickerMode = 'auto';
  startView: MtxCalendarView = 'month';
  multiYearSelector = false;
  touchUi = false;
  twelvehour = true;
  timeInterval = 1;
  timeInput = true;

  @Input() datetime = new Date();
  @Output() datetimeChange = new EventEmitter<Date>();
  onDatetimeChange(moment: Moment) {
    this.datetimeChange.emit(moment.toDate());
  }

  @Input() label: string;
  @Input() required: boolean;
  @Input() name: string;
  @Input() icon: string;
}
