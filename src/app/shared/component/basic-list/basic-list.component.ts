import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IBasicListItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-basic-list',
  styleUrls: ['./basic-list.component.scss'],
  templateUrl: './basic-list.component.html',
})
export class BasicListComponent {
  @Input() items: IBasicListItem[];
  @Input() editIcon: boolean;
  @Input() editRoute: string;

  @Output() onEditClick = new EventEmitter<number>();
  clickEdit(id: number) {
    this.onEditClick.emit(id);
  }
}
