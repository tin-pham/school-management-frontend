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
    this._courseService
      .getList({
        userId: this._authService.getUserId(),
      })
      .subscribe(response => {
        this.myCourses = response.data;
        console.log(this.myCourses);
      });
  }
}
