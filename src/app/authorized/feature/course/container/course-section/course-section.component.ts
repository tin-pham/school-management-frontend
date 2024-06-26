import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { LessonService } from '@core/services/api/lesson.service';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-section',
  styleUrls: ['course-section.component.scss'],
  templateUrl: 'course-section.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
        }),
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'auto',
          opacity: '1',
        }),
      ),
      transition('expanded <=> collapsed', [animate('300ms ease-out')]),
    ]),
  ],
})
export class CourseSectionComponent implements OnInit {
  private _section: SectionGetListDataRO;
  courseId: number;

  toggle = false;

  @Input() showIcons: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private dialog: MatDialog,
    private _sectionService: SectionService,
    private _authService: AuthService,
    private _courseStudentService: CourseStudentService,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    this.courseId = +this.route.snapshot.params['id'];
  }

  get isStudent() {
    return this._authService.isStudent();
  }

  @Input()
  set section(section: SectionGetListDataRO) {
    this._section = section;
  }

  get section() {
    return this._section;
  }

  @Output() onDelete = new EventEmitter();

  delete(event) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._sectionService.delete(this.section.id).subscribe(response => {
        this.toast.success('Xóa chương thành công');
        this.onDelete.emit(response.id);
      });
    });

    event.stopPropagation();
  }

  editLesson(id: number) {
    this.router.navigate(['/course', this.courseId, 'section', this.section.id, 'lesson', id, 'edit']);
  }

  navigateToDetail(id: number) {
    this._courseStudentService.checkRegistered({ courseId: this.courseId }).subscribe(() => {
      this.router.navigate(['/course', this.courseId, 'section', this.section.id, 'lesson', id]);
    });
  }

  deleteLesson(id: number) {
    this._lessonService.delete(id).subscribe(() => {
      this.toast.success('Xóa thành công');
      this.section.lessons = this.section.lessons.filter(lesson => lesson.id !== id);
    });
  }
}
