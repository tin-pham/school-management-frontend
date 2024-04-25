import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { SectionGetListDataLessonRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-lesson-item',
  styleUrls: ['course-lesson-item.component.scss'],
  templateUrl: 'course-lesson-item.component.html',
})
export class CourseLessonItemComponent {
  @Input() sectionId: number;
  @Input() courseId: number;
  @Input() showIcons: boolean;

  @Input() lessons: SectionGetListDataLessonRO[];

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {}

  routeToEdit(event: MouseEvent, lessonId: number) {
    this.router.navigate(['course', this.courseId, 'section', this.sectionId, 'lesson', lessonId, 'edit']);
    event.stopPropagation();
  }

  routeToLesson(lessonId: number) {
    this.router.navigate(['course', this.courseId, 'section', this.sectionId, 'lesson', lessonId]);
  }

  @Output() onDelete = new EventEmitter();
  delete(event: MouseEvent, lessonId: number) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDelete.emit(lessonId);
    });
    event.stopPropagation();
  }
}
