import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IImageCardOption {
  haveDelete?: boolean;
  haveClose?: boolean;
  haveCheckbox?: boolean;
}

@Component({
  selector: 'app-image-card',
  styleUrls: ['image-card.component.scss'],
  templateUrl: 'image-card.component.html',
})
export class ImageCardComponent {
  @Input() src: string;
  @Input() alt: string;
  @Input() name: string;
  @Input() description: string;
  @Input() isEdit: boolean;
  @Input() isCheck: boolean;
  @Input() option: IImageCardOption = {
    haveDelete: false,
    haveClose: false,
    haveCheckbox: false,
  };

  @Output() checkChange = new EventEmitter();
  check() {
    this.checkChange.emit();
  }
}
