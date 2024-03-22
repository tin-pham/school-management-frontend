import { Component, Input } from '@angular/core';
import { CourseOutcomeGetListDataRO } from '@shared/models/ro/course-outcome.ro';

@Component({
  selector: 'app-course-outcome-list',
  styleUrls: ['course-outcome-list.component.scss'],
  templateUrl: 'course-outcome-list.component.html',
})
export class CourseOutcomeListComponent {
  @Input() outcomes: CourseOutcomeGetListDataRO[];
}
