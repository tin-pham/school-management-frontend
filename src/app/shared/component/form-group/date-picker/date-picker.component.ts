import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrl: 'date-picker.component.scss',
})
export class DatePickerComponent {
  @Input() value: string;
  @Input() name: string;
  @Output() valueChange = new EventEmitter();

  onValueChange(value: string) {
    // Parse the input value to a Date object
    const date = new Date(value);

    // Get the timezone offset of the browser's current locale
    const tzoffset = new Date().getTimezoneOffset() * 60000; // Offset in milliseconds

    // Adjust the date by the timezone offset to get the local time
    const localDate = new Date(date.getTime() - tzoffset);

    // Convert to ISO string and remove the trailing 'Z' which denotes UTC
    const localISOTime = localDate.toISOString().slice(0, -1);
    this.valueChange.emit(localISOTime);
  }
}
