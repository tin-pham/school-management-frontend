import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionGetListDataLessonRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-lesson-item',
  styleUrls: ['course-lesson-item.component.scss'],
  templateUrl: 'course-lesson-item.component.html',
})
export class CourseLessonItemComponent {
  @Input() isStudent: boolean;
  @Input() sectionId: number;

  @Input() lessons: SectionGetListDataLessonRO[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  routeToEdit(lessonId: number) {
    this.router.navigate(['section', this.sectionId, 'lesson', lessonId, 'edit'], { relativeTo: this.route.parent });
  }

  routeToLesson(lessonId: number) {
    this.router.navigate(['section', this.sectionId, 'lesson', lessonId], { relativeTo: this.route.parent });
  }
}
