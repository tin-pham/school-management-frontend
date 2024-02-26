import { Component, Input, OnInit } from '@angular/core';
import { AttachmentService } from '@core/services/api/attachment.service';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';

@Component({
  selector: 'app-assignment-submitted-list',
  styleUrls: ['./assignment-submitted-list.component.scss'],
  templateUrl: './assignment-submitted-list.component.html',
})
export class AssignmentSubmittedListComponent implements OnInit {
  attachments: AttachmentGetListDataRO[];
  @Input() assignmentId: number;

  constructor(private _attachmentService: AttachmentService) {}

  ngOnInit() {
    this._attachmentService.getList({ assignmentId: this.assignmentId }).subscribe(response => (this.attachments = response.data));
  }
}
