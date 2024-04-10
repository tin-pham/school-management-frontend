import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TeacherService } from '@core/services/api/teacher.service';
import { TeacherGetListDTO } from '@shared/models/dto/teacher.dto';
import { TeacherGetListDataRO } from '@shared/models/ro/teacher.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-teacher-list',
  styleUrls: ['teacher-list.component.scss'],
  templateUrl: 'teacher-list.component.html',
})
export class TeacherListComponent implements OnInit {
  teachers: TeacherGetListDataRO[] = [];
  search$ = new BehaviorSubject<string>('');

  itemsPerPage = 4;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private router: Router,
    private _teacherService: TeacherService,
  ) {}

  ngOnInit() {
    this.search$.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => this.loadTeachers(this.getDto()));
    this.loadTeachers(this.getDto());
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadTeachers({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  loadTeachers(dto: TeacherGetListDTO) {
    this._teacherService.getList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.teachers = response.data;
      this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
    });
  }

  deleteTeacher(id: string) {
    this._teacherService.delete(id).subscribe(() => {
      this.toast.success('Xóa học sinh thành công');
      this.loadTeachers(this.getDto());
    });
  }

  routeToEdit(id: string) {
    this.router.navigate(['teacher', id, 'edit']);
  }

  setSearch(searchTerm: string) {
    this.page = 1; // Reset to the first page
    this.search$.next(searchTerm);
  }

  getDto() {
    return {
      search: this.search$.value,
      page: this.page,
      limit: this.itemsPerPage,
    };
  }
}
