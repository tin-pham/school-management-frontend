import { Component, Input } from '@angular/core';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';

@Component({
  selector: 'app-course-group',
  styleUrls: ['course-group.component.scss'],
  templateUrl: 'course-group.component.html',
})
export class CourseGroupComponent {
  @Input() category: CategoryGetListDataRO;
}
