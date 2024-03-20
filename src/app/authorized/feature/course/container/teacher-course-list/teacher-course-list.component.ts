import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { CourseService } from '@core/services/api/course.service';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CourseTeacherGetListDTO } from '@shared/models/dto/course.dto';
import { CourseTeacherGetListDataRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-teacher-course-list',
  styleUrls: ['teacher-course-list.component.scss'],
  templateUrl: 'teacher-course-list.component.html',
})
export class TeacherCourseListComponent implements OnInit {
  courses: CourseTeacherGetListDataRO[] = [];
  options: IImageCardOption = {
    haveClose: false,
    haveDelete: true,
    haveCheckbox: false,
  };

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private toast: ToastrService,
    private _courseService: CourseService,
  ) {}

  itemsPerPage = 3;
  page = 1;
  totalItems = 0;

  ngOnInit() {
    this.loadCourses({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  loadCourses(dto: CourseTeacherGetListDTO) {
    this._courseService.teacherGetList(dto).subscribe(response => {
      this.courses = response.data;
      this.totalItems = response.meta.totalItems;
      this.cd.markForCheck();
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadCourses({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  delete(courseId: number) {
    this._courseService.delete(courseId).subscribe(() => {
      this.toast.success('Xóa thành công');
      this.loadCourses({
        limit: this.itemsPerPage,
        page: this.page,
      });
    });
  }

  routeToAssignment(courseId: number) {
    this.router.navigate(['course', courseId, 'assignment']);
  }
}
