import { Component, Input } from '@angular/core';

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
}
