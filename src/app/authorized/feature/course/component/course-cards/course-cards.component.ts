import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(private _authService: AuthService) {}

  @Output() onDelete = new EventEmitter();
  delete(courseId: number) {
    this.onDelete.emit(courseId);
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
