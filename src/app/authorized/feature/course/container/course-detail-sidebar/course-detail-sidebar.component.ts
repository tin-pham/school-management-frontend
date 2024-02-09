import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-sidebar',
  styleUrls: ['course-detail-sidebar.component.scss'],
  templateUrl: 'course-detail-sidebar.component.html',
})
export class CourseDetailSidebarComponent {
  @Input() name: string;
  @Input() imageUrl: string;
}
