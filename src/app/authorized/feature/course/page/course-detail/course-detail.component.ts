import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  styleUrls: ['course-detail.component.scss'],
  templateUrl: 'course-detail.component.html',
})
export class CourseDetailComponent implements OnInit {
  navLinks: any[];
  basePath: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.navLinks = [
        {
          label: 'Bài học',
          link: `/course/${params.id}`,
        },
        {
          label: 'Thông báo',
          link: `/course/${params.id}/post`,
        },
      ];
    });
  }
}
