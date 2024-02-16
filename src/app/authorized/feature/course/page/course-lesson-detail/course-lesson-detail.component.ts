import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonGetDetailRO } from '@shared/models/ro/lesson.ro';

@Component({
  selector: 'app-course-lesson-detail',
  styleUrls: ['course-lesson-detail.component.scss'],
  templateUrl: 'course-lesson-detail.component.html',
})
export class CourseLessonDetailComponent implements OnInit {
  lesson: LessonGetDetailRO;

  constructor(
    private route: ActivatedRoute,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    const lessonId = +this.route.snapshot.params['lessonId'];
    this._lessonService.getDetail(lessonId).subscribe(data => (this.lesson = data));
  }
}
