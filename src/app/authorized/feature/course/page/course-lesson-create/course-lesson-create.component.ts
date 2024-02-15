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
  title: string;
  body: string;
  videoUrl: string;
  sectionId: number;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    this.sectionId = this.route.snapshot.params['sectionId'];
  }

  create() {
    const dto = new LessonStoreDTO({
      title: this.title,
      body: this.body,
      videoUrl: this.videoUrl,
      sectionId: this.sectionId,
    });
    this._lessonService.store(dto).subscribe(() => {
      this.toast.success('Tạo bài học thành công');
      window.history.back();
    });
  }
}
