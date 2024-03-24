import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { SectionService } from '@core/services/api/section.service';
import { IBasicListItem } from '@shared/component/basic-list/basic-list.component';
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
  lessonItems: IBasicListItem[];
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
    this.lessonItems = section.lessons.map(lesson => ({
      id: lesson.id,
      name: lesson.title,
    }));
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
        this.toast.success('Xóa học phần thành công');
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
}
