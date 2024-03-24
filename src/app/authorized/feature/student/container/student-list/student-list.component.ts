import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PaginateComponentBase } from '@core/base/paginate.component.base';
import { StudentService } from '@core/services/api/student.service';
import { StudentGetListDTO } from '@shared/models/dto/student.dto';
import { StudentGetListDataRO, StudentGetListRO } from '@shared/models/ro/student.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-student-list',
  styleUrls: ['student-list.component.scss'],
  templateUrl: 'student-list.component.html',
})
export class StudentListComponent extends PaginateComponentBase<StudentGetListRO> implements OnInit {
  students: StudentGetListDataRO[] = [];
  totalItems = 0;

  ngOnInit() {}

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private router: Router,
    private _studentService: StudentService,
  ) {
    super(300);
  }

  protected fetchData(dto: StudentGetListDTO) {
    return this._studentService.getList({
      limit: dto.limit,
      page: dto.page,
      search: dto.search,
    });
  }

  protected handleData(data: StudentGetListRO): void {
    this.totalItems = data.meta.totalItems;
    this.students = data.data;
    this.cd.markForCheck(); // Update the view with the new data
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadStudents({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  loadStudents(dto: StudentGetListDTO) {
    this._studentService.getList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.students = response.data;
      this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
    });
  }

  deleteStudent(id: string) {
    this._studentService.delete(id).subscribe(() => {
      this.toast.success('Xóa học sinh thành công');
      this.loadStudents({
        limit: this.itemsPerPage,
        page: this.page,
      });
    });
  }

  routeToEdit(id: string) {
    this.router.navigate(['student', id, 'edit']);
  }
}
