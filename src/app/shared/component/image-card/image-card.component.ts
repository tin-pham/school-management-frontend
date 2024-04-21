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
  @Input() id: number;
  @Input() thumnailText: string;
  @Input() src: string;
  @Input() alt: string;
  @Input() isEdit: boolean;
  @Input() isCheck: boolean;
  @Input() option: IImageCardOption = {
    haveCheckbox: false,
  };

  @Output() checkChange = new EventEmitter();
  check() {
    this.checkChange.emit();
  }

  getBackgroundStyle(): string {
    if (!this.src) {
      // Only generate background if 'src' is not present
      const multiplier = 137; // Prime number as a multiplier to spread out hues more evenly
      const hash = (this.id * multiplier) % 360; // Multiply 'id' by a larger factor before modulo operation
      const color1 = `hsl(${hash}, 100%, 50%)`; // First color
      const color2 = `hsl(${(hash + 45) % 360}, 100%, 50%)`; // Second color, offset by 45 degrees

      return `linear-gradient(to right, ${color1}, ${color2})`;
    }
    return ''; // Return an empty string if 'src' is present, meaning no need for a generated background
  }
}
