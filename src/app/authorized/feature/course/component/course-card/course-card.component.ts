import { Component, Input } from '@angular/core';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';

@Component({
  selector: 'app-course-card',
  styleUrls: ['course-card.component.scss'],
  templateUrl: 'course-card.component.html',
})
export class CourseCardComponent {
  @Input() imageUrl: string;
  @Input() alt: string;
  @Input() name: string;
  @Input() description: string;
  @Input() isEdit: boolean;
  @Input() option: IImageCardOption;
}
