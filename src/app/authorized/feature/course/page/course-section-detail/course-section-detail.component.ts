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

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _sectionService: SectionService,
  ) {}

  ngOnInit() {
    const sectionId = this.route.snapshot.params['sectionId'];
    this._sectionService.getDetail(sectionId, { withLesson: true }).subscribe(data => (this.section = data));
  }

  updateSection() {
    this._sectionService.update(this.section.id, this.section).subscribe(() => this.toast.success('Cập nhật thành công'));
  }
}
