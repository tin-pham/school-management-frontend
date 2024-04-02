import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-notification-item',
  styleUrls: ['notification-item.component.scss'],
  templateUrl: 'notification-item.component.html',
})
export class NotificationItemComponent {
  @Input() showCheckbox = true;
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() content: string;
  @Input() createdAt: Date;
  isChecked = false;

  dateAgo() {
    const now = new Date();
    const createdAtDate = new Date(this.createdAt);
    const seconds = Math.floor((now.getTime() - createdAtDate.getTime()) / 1000);

    if (seconds < 60) {
      return 'Bây giờ';
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} phút trước`;
    } else if (seconds < 86400) {
      return `${Math.floor(seconds / 3600)} giờ trước`;
    } else {
      return `${Math.floor(seconds / 86400)} ngày trước`;
    }
  }

  @Output() onCheckBoxChange = new EventEmitter<boolean>();
  checkBoxChange(event: MatCheckboxChange) {
    this.onCheckBoxChange.emit(event.checked);
  }
}
