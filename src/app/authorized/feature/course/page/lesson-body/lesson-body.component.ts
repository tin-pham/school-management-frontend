import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '@core/services/api/lesson.service';

@Component({
  selector: 'app-lesson-body',
  styleUrls: ['lesson-body.component.scss'],
  templateUrl: 'lesson-body.component.html',
})
export class LessonBodyComponent implements OnInit {
  body: string;

  constructor(
    private route: ActivatedRoute,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('lessonId');

    this._lessonService.getDetail(id).subscribe(response => (this.body = response.body));
  }
}
