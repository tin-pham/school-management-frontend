import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CourseService } from '@core/services/api/course.service';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CourseGetListDTO } from '@shared/models/dto/course.dto';
import { CategoryGetDetailRO } from '@shared/models/ro/category.ro';
import { CourseGetListRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-category-group',
  templateUrl: './category-group.component.html',
  styleUrls: ['./category-group.component.scss'],
})
export class CategoryGroupComponent {
  private _coursePaginated: CourseGetListRO;

  @Input() category: CategoryGetDetailRO;
  @Input() categoryId: number;
  courseCardOption: IImageCardOption = {
    haveClose: true,
    haveDelete: true,
  };
  totalItems: number;
  itemsPerPage = 5;
  page = 1;

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private router: Router,
    private _courseService: CourseService,
  ) {}

  @Input()
  set coursePaginated(coursePaginated: CourseGetListRO) {
    if (coursePaginated) {
      this._coursePaginated = coursePaginated;
      this.totalItems = coursePaginated.meta.totalItems;
      this.itemsPerPage = coursePaginated.meta.itemsPerPage;
      this.cd.markForCheck();
    }
  }

  get coursePaginated(): CourseGetListRO {
    return this._coursePaginated;
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadCourses({
      limit: this.itemsPerPage,
      page: this.page,
      categoryId: this.category.id,
    });
  }

  loadCourses(dto: CourseGetListDTO) {
    const { limit, page, categoryId } = dto;
    this._courseService.getList({ limit, page, categoryId }).subscribe({
      next: response => {
        this.totalItems = response.meta.totalItems;
        this.cd.markForCheck();
      },
    });
  }

  delete(courseId: number) {
    this._courseService.delete(courseId).subscribe(() => {
      this.toast.success('Xóa khóa học thành công');
    });
  }

  createCourse() {
    this.router.navigate(['/course', 'create'], { queryParams: { categoryId: this.categoryId } });
  }
}
