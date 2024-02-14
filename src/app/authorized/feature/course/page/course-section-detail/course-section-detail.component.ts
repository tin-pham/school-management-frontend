import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '@core/services/api/lesson.service';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetDetailRO } from '@shared/models/ro/section.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-section-detail',
  styleUrls: ['course-section-detail.component.scss'],
  templateUrl: 'course-section-detail.component.html',
})
export class CourseSectionDetailComponent implements OnInit {
  section: SectionGetDetailRO;
  lessonCreate: string;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _sectionService: SectionService,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    const sectionId = this.route.snapshot.params['sectionId'];
    this._sectionService.getDetail(sectionId, { withLesson: true }).subscribe(data => (this.section = data));
  }

  updateSection() {
    this._sectionService.update(this.section.id, this.section).subscribe(() => this.toast.success('Cập nhật thành công'));
  }

  addLesson() {
    this._lessonService
      .store({
        title: this.lessonCreate,
        body: 'No content',
        sectionId: this.section.id,
      })
      .subscribe(response => {
        this.toast.success('Tạo bài học thành công');
        this.section.lessons.push({
          id: response.id,
          title: response.title,
        });
        this.lessonCreate = '';
      });
  }

  removeLessonFromSection(lessonId: number) {
    this._lessonService.delete(lessonId).subscribe(() => {
      this.toast.success('Xóa bài học thành công');
      this.section.lessons = this.section.lessons.filter(lesson => lesson.id !== lessonId);
    });
  }
}
