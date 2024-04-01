import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-files-input-group',
  styleUrls: ['files-input-group.component.scss'],
  templateUrl: 'files-input-group.component.html',
})
export class FilesInputGroupComponent {
  @Input() name: string;
  @Input() icon: string;
  @Input() label: string;
  @Input() files: File[] = [];
  @Input() accept: string;

  @Output() filesChange = new EventEmitter<any>();

  onFilesChange(event) {
    this.filesChange.emit(event);
  }
}
