import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ISelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-select-list',
  styleUrls: ['select-list.component.scss'],
  templateUrl: 'select-list.component.html',
})
export class SelectListComponent {
  @Input() options: ISelectOption[] = [];
  @Input() label: string;

  @Output() onOptionChange = new EventEmitter<string>();
  optionChange(event: any) {
    this.onOptionChange.emit(event.target.value);
  }
}
