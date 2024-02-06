import { Component, Input } from '@angular/core';

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
}
