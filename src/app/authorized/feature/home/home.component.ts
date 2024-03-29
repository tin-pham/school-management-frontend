import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { CourseService } from '@core/services/api/course.service';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-home',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  myCourses: CourseGetListDataRO[];

  constructor(
    private _courseService: CourseService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    if (this.isStudent) {
      this._courseService
        .getList({
          userId: this._authService.getUserId(),
          withAssignmentCount: true,
        })
        .subscribe(response => {
          this.myCourses = response.data;
        });
    }
  }

  get isStudent() {
    return this._authService.isStudent();
  }

  get isTeacher() {
    return this._authService.isTeacher();
  }
}
