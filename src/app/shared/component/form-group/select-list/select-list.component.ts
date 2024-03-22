import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ISelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-select-list',
  styleUrls: ['select-list.component.scss'],
  templateUrl: 'select-list.component.html',
})
export class SelectListComponent<T> {
  @Input() options: ISelectOption[] = [];
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() icon: string;

  @Input() selected: T;
  @Output() selectedChange = new EventEmitter<T>();
  onSelectedChange() {
    this.selectedChange.emit(this.selected);
  }
}
