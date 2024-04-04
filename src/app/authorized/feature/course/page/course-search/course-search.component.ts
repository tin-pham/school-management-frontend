import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginateComponent } from '@core/base/search.base';
import { CourseService } from '@core/services/api/course.service';
import { CourseGetListDTO } from '@shared/models/dto/course.dto';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-search',
  styleUrls: ['course-search.component.scss'],
  templateUrl: 'course-search.component.html',
})
export class CourseSearchComponent extends PaginateComponent implements OnInit {
  page = 1;
  itemsPerPage = 10;
  totalItems = 0;
  search: string;
  items: CourseGetListDataRO[] = [];

  loadData(dto: CourseGetListDTO): void {
    this._courseService.getList(dto).subscribe(res => {
      this.items = res.data;
      console.log(this.items);
      this.totalItems = res.meta.totalItems;
      this.cd.markForCheck();
    });
  }
  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private _courseService: CourseService,
  ) {
    super();
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.search = params.get('search');
      const dto = this.getDto();
      this.loadData(dto);
    });
  }

  getDto() {
    const dto = new CourseGetListDTO({
      page: this.page,
      limit: this.itemsPerPage,
      search: this.search,
    });
    return dto;
  }
}
