import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonGetDetailRO } from '@shared/models/ro/lesson.ro';
import { Editor } from 'ngx-editor';

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
  courseId: number;
  editor: Editor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _lessonService: LessonService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    const lessonId = +this.route.snapshot.params['lessonId'];
    this.courseId = +this.route.snapshot.params['id'];
    this._lessonService.getDetail(lessonId).subscribe(data => (this.lesson = data));

    this.router.events.subscribe(() => {
      const fullPath = this.router.url;

      this.activeLinkIndex = this.navLinks.findIndex(navLink => {
        // Construct the full path for each nav link to compare with the current URL
        const navLinkPath = Array.isArray(navLink.link) ? navLink.link.join('/') : navLink.link;
        return fullPath.includes(navLinkPath);
      });
    });

    this.route.parent.params.subscribe(params => {
      this.basePath = `/course/${params.id}/section/${params.sectionId}/lesson/${params.lessonId}`;
      this.navLinks = [
        {
          label: 'Mô tả',
          link: [this.basePath],
        },
        {
          label: 'Tài liệu',
          link: [this.basePath, 'attachment'],
        },
        {
          label: 'Bài tập',
          link: [this.basePath, 'assignment'],
        },
        {
          label: 'Trắc nghiệm',
          link: [this.basePath, 'exercise'],
        },
        {
          label: 'Bình luận',
          link: [this.basePath, 'comment'],
        },
      ];
    });
  }

  goBack() {
    this.router.navigate(['course', this.courseId]);
  }

  routeToEdit(event: MouseEvent) {
    this.router.navigate([this.basePath, 'edit'], { relativeTo: this.route.parent });
    event.stopPropagation();
  }

  isStudent() {
    return this._authService.isStudent();
  }

  isYourCourse() {
    return this.lesson.createdBy === this._authService.getUserId();
  }
}
