import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-section',
  styleUrls: ['course-section.component.scss'],
  templateUrl: 'course-section.component.html',
})
export class CourseSectionComponent implements OnInit {
  private _section: SectionGetListDataRO;
  lessonTitles: string[];
  courseId: string;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _sectionService: SectionService,
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
  }

  @Input()
  set section(section: SectionGetListDataRO) {
    this._section = section;
    this.lessonTitles = section.lessons.map(lesson => lesson.title);
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
}
