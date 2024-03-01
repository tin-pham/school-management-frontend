import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrl: 'date-time-picker.component.scss',
})
export class DateTimePickerComponent {
  @ViewChild('picker') picker: any;

  @Input() value: string;
  @Output() valueChange = new EventEmitter();
  onValueChange(value: string) {
    this.valueChange.emit(value);
  }

  @Input() label: string;
}
