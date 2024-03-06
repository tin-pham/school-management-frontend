import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@core/services/api/course.service';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-assignment',
  styleUrls: ['course-assignment.component.scss'],
  templateUrl: 'course-assignment.component.html',
})
export class CourseAssignmentComponent {
  courseId: number;
  course: CourseGetDetailRO;

  constructor(
    private route: ActivatedRoute,
    private _courseService: CourseService,
  ) {}

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this._courseService.getDetail(this.courseId).subscribe(response => {
      this.course = response;
    });
  }
}
