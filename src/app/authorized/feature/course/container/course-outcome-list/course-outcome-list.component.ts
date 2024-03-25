import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseOutcomeGetListDataRO } from '@shared/models/ro/course-outcome.ro';

@Component({
  selector: 'app-course-outcome-list',
  styleUrls: ['course-outcome-list.component.scss'],
  templateUrl: 'course-outcome-list.component.html',
})
export class CourseOutcomeListComponent {
  @Input() outcomes: CourseOutcomeGetListDataRO[];
  @Input() isStudent: boolean;
  isEdit = false;

  @Output() onDelete = new EventEmitter();
  delete(id: number) {
    this.onDelete.emit(id);
  }

  @Output() onEdit = new EventEmitter();
  edit(newName: string) {
    this.isEdit = false;
    this.onEdit.emit(newName);
  }
}
