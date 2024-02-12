import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-header',
  styleUrls: ['course-detail-header.component.scss'],
  templateUrl: 'course-detail-header.component.html',
})
export class CourseDetailHeaderComponent {
  @Input() courseId: number;
  @Input() name: string;
  @Input() description: string;
}
