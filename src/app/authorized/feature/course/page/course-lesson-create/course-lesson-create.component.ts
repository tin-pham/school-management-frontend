import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonStoreDTO } from '@shared/models/dto/lesson.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-lesson-create',
  styleUrls: ['course-lesson-create.component.scss'],
  templateUrl: 'course-lesson-create.component.html',
})
export class CourseLessonCreateComponent implements OnInit {
  dto = new LessonStoreDTO();

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    this.dto.sectionId = this.route.snapshot.params['sectionId'];
  }

  create() {
    if (!this.dto.videoUrl?.trim()) {
      delete this.dto.videoUrl;
    }
    this._lessonService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo bài học thành công');
      window.history.back();
    });
  }
}
