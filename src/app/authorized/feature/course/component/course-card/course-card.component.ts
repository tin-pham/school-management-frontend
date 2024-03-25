import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-card',
  styleUrls: ['course-card.component.scss'],
  templateUrl: 'course-card.component.html',
})
export class CourseCardComponent {
  @Input() isEdit: boolean;
  @Input() option: IImageCardOption;
  @Input() course: CourseGetListDataRO;
  @Input() assignmentIcon = true;
  @Input() showStudentCount = true;

  @Output() onDelete = new EventEmitter();
  delete() {
    this.onDelete.emit();
  }

  @Output() onRemove = new EventEmitter();
  remove() {
    this.onRemove.emit();
  }

  @Output() onAssignmentClick = new EventEmitter();
  assignmentClick(event) {
    this.onAssignmentClick.emit();
    event.stopPropagation();
  }
}
