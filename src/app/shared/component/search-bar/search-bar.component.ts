import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  styleUrls: ['search-bar.component.scss'],
  templateUrl: 'search-bar.component.html',
})
export class SearchBarComponent {
  @Input() label: string;

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
