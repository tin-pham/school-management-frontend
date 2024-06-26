import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { CourseOutcomeService } from '@core/services/api/course-outcome.service';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { CourseService } from '@core/services/api/course.service';
import { CourseOutcomeStoreDTO } from '@shared/models/dto/course-outcome.dto';
import { CourseOutcomeGetListDataRO } from '@shared/models/ro/course-outcome.ro';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-detail-home',
  styleUrls: ['course-detail-home.component.scss'],
  templateUrl: 'course-detail-home.component.html',
})
export class CourseDetailHomeComponent {
  course: CourseGetDetailRO;
  isRegistered: boolean;
  courseId: number;

  showOutcomeTextbox = false;

  courseOutcomeName: string;

  outcomes: CourseOutcomeGetListDataRO[];

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _courseService: CourseService,
    private _courseStudentService: CourseStudentService,
    private _courseOutcomeService: CourseOutcomeService,
    private _authService: AuthService,
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

    this.loadOutcomes();
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

  loadOutcomes() {
    this._courseOutcomeService.getList({ courseId: this.courseId }).subscribe({
      next: response => {
        this.outcomes = response.data;
      },
    });
  }

  createOutcome() {
    if (!this.courseOutcomeName) {
      return;
    }

    const dto = new CourseOutcomeStoreDTO({
      courseId: this.courseId,
      name: this.courseOutcomeName,
    });
    this._courseOutcomeService.store(dto).subscribe(response => {
      this.courseOutcomeName = '';
      this.outcomes.push(response);
    });
  }

  deleteOutcome(id: number) {
    this._courseOutcomeService.delete(id).subscribe(() => {
      const index = this.outcomes.findIndex(x => x.id === id);
      if (index > -1) {
        this.outcomes.splice(index, 1);
      }
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  isYourCourse() {
    return this.course.createdBy === this._authService.getUserId();
  }
}
