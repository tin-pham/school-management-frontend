import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';

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

  constructor(private _authService: AuthService) {}

  isStudent() {
    return this._authService.isStudent();
  }

  @Output() editClick = new EventEmitter<number>();
  clickEdit(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.editClick.emit(id);
  }

  @Output() itemClick = new EventEmitter<number>();
  clickItem(id: number) {
    this.itemClick.emit(id);
  }
}
