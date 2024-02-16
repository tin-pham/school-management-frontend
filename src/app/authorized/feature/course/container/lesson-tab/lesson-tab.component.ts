import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson-tab',
  styleUrls: ['lesson-tab.component.scss'],
  templateUrl: 'lesson-tab.component.html',
})
export class LessonTabComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  basePath: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
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
      ]
    });
  }
}
