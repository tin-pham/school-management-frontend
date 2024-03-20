import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { StudentService } from '@core/services/api/student.service';
import { StudentGetListDTO } from '@shared/models/dto/student.dto';
import { StudentGetListDataRO } from '@shared/models/ro/student.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-student-list',
  styleUrls: ['student-list.component.scss'],
  templateUrl: 'student-list.component.html',
})
export class StudentListComponent implements OnInit {
  students: StudentGetListDataRO[] = [];

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private router: Router,
    private _studentService: StudentService,
  ) {}

  ngOnInit() {
    this.loadStudents({
      limit: this.itemsPerPage,
      page: this.page,
    });
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
