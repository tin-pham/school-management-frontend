import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@core/services/api/course.service';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-detail',
  styleUrls: ['course-detail.component.scss'],
  templateUrl: 'course-detail.component.html',
})
export class CourseDetailComponent {
  course: CourseGetDetailRO;

  constructor(
    private route: ActivatedRoute,
    private _courseService: CourseService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this._courseService.getDetail(id).subscribe({
      next: response => {
        this.course = response;
      },
    });
  }
}