import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-cards',
  styleUrls: ['course-cards.component.scss'],
  templateUrl: 'course-cards.component.html',
})
export class CourseCardsComponent {
  @Input() courses: CourseGetListDataRO[] = [];
  @Input() options: IImageCardOption;
  @Input() assignmentIcon: boolean;
  @Input() showStudentCount: boolean;

  constructor(
    private router: Router,
    private _authService: AuthService,
  ) {}

  @Output() onDelete = new EventEmitter();
  delete(courseId: number) {
    this.onDelete.emit(courseId);
  }

  @Output() onRemove = new EventEmitter();
  remove(courseId: number) {
    this.onRemove.emit(courseId);
  }

  @Output() onAssignmentClick = new EventEmitter();
  assignmentClick(courseId: number) {
    this.router.navigate(['course', courseId, 'assignment']);
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
