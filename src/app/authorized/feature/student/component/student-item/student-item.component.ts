import { Component, Input } from '@angular/core';
import { StudentGetListDataRO } from '@shared/models/ro/student.ro';

@Component({
  selector: 'app-student-item',
  styleUrls: ['student-item.component.scss'],
  templateUrl: 'student-item.component.html',
})
export class StudentItemComponent {
  @Input() student: StudentGetListDataRO;
}
