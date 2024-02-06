import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface SelectSearchOption {
  name: string;
  id: number;
}

@Component({
  selector: 'app-select-multiple-search',
  styleUrls: ['select-multiple-search.component.scss'],
  templateUrl: 'select-multiple-search.component.html',
})
export class SelectMultipleSearchComponent {
  private _options: SelectSearchOption[] = [];

  @Input() placeholder: string = 'Search...';
  @Input() selected: number[];

  @Output() selectedChange = new EventEmitter<number[]>();

  filteredOptions: SelectSearchOption[] = [];

  constructor() {}

  @Input()
  set options(options: SelectSearchOption[]) {
    if (!options) return;
    this._options = options;
    this.filteredOptions = options.slice();
  }

  get options(): SelectSearchOption[] {
    return this._options;
  }

  onSelectedChange(value: number[]): void {
    this.selectedChange.emit(value);
  }

  onKey(inputElement: Event): void {
    const value = Number((inputElement.target as HTMLInputElement).value);
    this.filteredOptions = this._options.filter(option => option.id === value);
  }
}
