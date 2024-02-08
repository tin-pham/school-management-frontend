import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-detail-toolbar',
  styleUrls: ['category-detail-toolbar.component.scss'],
  templateUrl: 'category-detail-toolbar.component.html',
})
export class CategoryDetailToolbarComponent {
  @Input() edit: boolean;
  @Output() editChange = new EventEmitter<boolean>();
  onEditChange() {
    this.editChange.emit(!this.edit);
  }

  @Output() cancel = new EventEmitter<boolean>();
  onCancel() {
    this.cancel.emit(false);
  }

  @Output() confirm = new EventEmitter<boolean>();
  onConfirm() {
    console.log('confirm clicked');
    this.confirm.emit(true);
  }
}
