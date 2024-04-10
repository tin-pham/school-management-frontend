import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginateComponent } from '@core/base/search.base';
import { StudentService } from '@core/services/api/student.service';
import { StudentGetListDTO } from '@shared/models/dto/student.dto';
import { StudentGetListDataRO } from '@shared/models/ro/student.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-student-list',
  styleUrls: ['student-list.component.scss'],
  templateUrl: 'student-list.component.html',
})
export class StudentListComponent extends PaginateComponent {
  students: StudentGetListDataRO[] = [];

  itemsPerPage = 4;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private router: Router,
    private studentService: StudentService,
  ) {
    super();
  }

  loadData(dto: StudentGetListDTO) {
    return this.studentService.getList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.students = response.data;
      this.cd.markForCheck();
    });
  }

  deleteStudent(id: string) {
    this.studentService.delete(id).subscribe(() => {
      this.toast.success('Student successfully deleted');
      this.loadData(this.getDto());
    });
  }

  routeToEdit(id: string) {
    this.router.navigate(['student', id, 'edit']);
  }

  getDto() {
    return {
      search: this.search$.value,
      page: this.page,
      limit: this.itemsPerPage,
    };
  }
}
