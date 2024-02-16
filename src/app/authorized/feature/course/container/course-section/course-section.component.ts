import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from '@core/services/api/section.service';
import { IBasicListItem } from '@shared/component/basic-list/basic-list.component';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-section',
  styleUrls: ['course-section.component.scss'],
  templateUrl: 'course-section.component.html',
})
export class CourseSectionComponent implements OnInit {
  private _section: SectionGetListDataRO;
  lessonItems: IBasicListItem[];
  courseId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private _sectionService: SectionService,
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
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

  delete() {
    this._sectionService.delete(this.section.id).subscribe(response => {
      this.toast.success('Xóa học phần thành công');
      this.onDelete.emit(response.id);
    });
  }

  editLesson(id: number) {
    this.router.navigate(['/course', this.courseId, 'section', this.section.id, 'lesson', id, 'edit']);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/course', this.courseId, 'section', this.section.id, 'lesson', id]);
  }
}
