import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonUpdateDTO } from '@shared/models/dto/lesson.dto';
import { LessonGetDetailRO } from '@shared/models/ro/lesson.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-lesson-edit',
  styleUrls: ['course-lesson-edit.component.scss'],
  templateUrl: 'course-lesson-edit.component.html',
})
export class CourseLessonEditComponent implements OnInit {
  lesson: LessonGetDetailRO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    const lessonId = +this.route.snapshot.params['lessonId'];
    this._lessonService.getDetail(lessonId).subscribe(data => (this.lesson = data));
  }

  update() {
    const dto = new LessonUpdateDTO({
      title: this.lesson.title,
      body: this.lesson.body,
      videoUrl: this.lesson.videoUrl,
    });
    this._lessonService.update(this.lesson.id, dto).subscribe(() => {
      this.toast.success('Cập nhật bài học thành công');
      window.history.back();
    });
  }
}
