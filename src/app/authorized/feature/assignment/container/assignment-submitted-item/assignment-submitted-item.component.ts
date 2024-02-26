import { Component, Input } from '@angular/core';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';

@Component({
  selector: 'app-assignment-submitted-item',
  styleUrls: ['./assignment-submitted-item.component.scss'],
  templateUrl: './assignment-submitted-item.component.html',
})
export class AssignmentSubmittedItemComponent {
  @Input() attachment: AttachmentGetListDataRO;
}
