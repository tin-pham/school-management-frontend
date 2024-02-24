import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { CourseService } from '@core/services/api/course.service';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-detail',
  styleUrls: ['course-detail.component.scss'],
  templateUrl: 'course-detail.component.html',
})
export class CourseDetailComponent {
  course: CourseGetDetailRO;
  isRegistered: boolean;
  courseId: number;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _courseService: CourseService,
    private _courseStudentService: CourseStudentService,
  ) {}

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this._courseService.getDetail(this.courseId).subscribe({
      next: response => {
        this.course = response;
      },
    });

    this._courseStudentService.isRegistered({ courseId: this.courseId }).subscribe({
      next: response => {
        this.isRegistered = response.result;
      },
    });
  }

  register() {
    this._courseStudentService.register({ courseId: this.courseId }).subscribe({
      next: () => {
        this.isRegistered = true;
        this.toast.success('Đăng ký thành công');
      },
    });
  }

  unRegister() {
    this._courseStudentService.unRegister({ courseId: this.courseId }).subscribe({
      next: () => {
        this.isRegistered = false;
        this.toast.success('Hủy đăng ký thành công');
      },
    });
  }
}
