import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ISelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-select-list',
  styleUrls: ['select-list.component.scss'],
  templateUrl: 'select-list.component.html',
})
export class SelectListComponent implements OnInit {
  @Input() options: ISelectOption[] = [];
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;

  @Input() selected: any;
  @Output() selectedChange = new EventEmitter();
  onSelectedChange(value: any) {
    // If this false
    this.selectedChange.emit(value);
  }

  ngOnInit() {
    console.log(this.options);
  }
}
