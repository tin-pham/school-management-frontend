import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';

@Component({
  selector: 'app-course-post',
  styleUrls: ['course-post.component.scss'],
  templateUrl: 'course-post.component.html',
})
export class CoursePostComponent implements OnInit {
  courseId: number;

  constructor(
    private route: ActivatedRoute,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('id');
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
