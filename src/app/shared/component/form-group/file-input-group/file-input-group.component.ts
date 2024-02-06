import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-input-group',
  styleUrls: ['file-input-group.component.scss'],
  templateUrl: 'file-input-group.component.html',
})
export class FileInputGroupComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() value: File;
  @Input() accept: string;
  @Output() valueChange = new EventEmitter<any>();

  onValueChange(event) {
    console.log(event.target.files);
    this.valueChange.emit(event);
  }
}
