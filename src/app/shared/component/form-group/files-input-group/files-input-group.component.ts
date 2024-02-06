import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileInput } from 'ngx-material-file-input';

@Component({
  selector: 'app-files-input-group',
  styleUrls: ['files-input-group.component.scss'],
  templateUrl: 'files-input-group.component.html',
})
export class FilesInputGroupComponent {
  fileInput: FileInput;

  @Input() name: string;
  @Input() label: string;
  @Input() files: File[] = [];

  @Output() fileInputChange = new EventEmitter<FileInput>();

  onFileInputChange() {
    this.files = this.fileInput.files;
    this.fileInputChange.emit(this.fileInput);
  }
}
