import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonGetDetailRO } from '@shared/models/ro/lesson.ro';

@Component({
  selector: 'app-course-lesson-detail',
  styleUrls: ['course-lesson-detail.component.scss'],
  templateUrl: 'course-lesson-detail.component.html',
})
export class CourseLessonDetailComponent implements OnInit {
  lesson: LessonGetDetailRO;
  navLinks: any[];
  activeLinkIndex = -1;
  basePath: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    const lessonId = +this.route.snapshot.params['lessonId'];
    this._lessonService.getDetail(lessonId).subscribe(data => (this.lesson = data));

    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(link => this.router.url.indexOf(link.link[0]) !== -1));
    });

    this.route.parent.params.subscribe(params => {
      this.basePath = `/course/${params.id}/section/${params.sectionId}/lesson/${params.lessonId}`;
      this.navLinks = [
        {
          label: 'Mô tả',
          link: [this.basePath],
        },
        {
          label: 'Đính kèm',
          link: [this.basePath, 'attachment'],
        },
        {
          label: 'Bài tập',
          link: [this.basePath, 'exercise'],
        },
        {
          label: 'Bình luận',
          link: [this.basePath, 'comment'],
        },
      ];
    });
  }
}
