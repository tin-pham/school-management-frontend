import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CourseService } from '@core/services/api/course.service';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CourseGetListDTO } from '@shared/models/dto/course.dto';
import { CategoryGetDetailRO } from '@shared/models/ro/category.ro';
import { CourseGetListRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-category-group',
  templateUrl: './category-group.component.html',
  styleUrls: ['./category-group.component.scss'],
})
export class CategoryGroupComponent {
  private _coursePaginated: CourseGetListRO;

  @Input() category: CategoryGetDetailRO;
  @Input() isEdit: boolean;
  courseCardOption: IImageCardOption = {
    haveClose: true,
    haveDelete: true,
  };
  totalItems: number;
  itemsPerPage = 5;
  page = 1;

  constructor(
    private courseService: CourseService,
    private cd: ChangeDetectorRef,
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
    this.courseService.getList({ limit, page, categoryId }).subscribe({
      next: response => {
        this.totalItems = response.meta.totalItems;
        this.cd.markForCheck();
      },
    });
  }
}
