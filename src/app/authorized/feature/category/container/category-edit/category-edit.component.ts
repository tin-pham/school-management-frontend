import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryGetDetailRO } from '@shared/models/ro/category.ro';
import { EMPTY, Observable, ReplaySubject, Subject, catchError, switchMap, takeUntil } from 'rxjs';
import { CategoryService } from '@core/services/api/category.service';
import { ToastrService } from '@shared/toastr/toastr.service';
import { CategoryUpdateDTO } from '@shared/models/dto/category.dto';
import { UncategorizeCourseDialogComponent } from '../uncategorize-course-dialog/uncategorize-course-dialog.component';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<void>(1);
  private _category: CategoryGetDetailRO;
  private update$ = new Subject<void>();

  @Input()
  set category(value: CategoryGetDetailRO) {
    this._category = value;
    this.dto = new CategoryUpdateDTO(this._category);
  }

  @Output() categoryChange = new EventEmitter<CategoryGetDetailRO>();
  onCategoryChange(category: CategoryGetDetailRO) {
    this.category = category;
    this.categoryChange.emit(category);
  }

  get category(): CategoryGetDetailRO {
    return this._category;
  }

  @Input() onUpdate: Observable<void>;
  @Input() edit: boolean;
  @Output() editChange = new EventEmitter<boolean>();

  dto = new CategoryUpdateDTO();

  constructor(
    private dialog: MatDialog,
    private toast: ToastrService,
    private _categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.update$
      .pipe(
        takeUntil(this.destroyed$),
        switchMap(() => this._categoryService.update(this.category.id, this.dto).pipe(catchError(() => EMPTY))),
      )
      .subscribe({
        next: response => {
          this.toast.success('Cập nhật danh mục thành công');
          this.onCategoryChange(response);
          this.editChange.emit(false);
        },
      });

    this.onUpdate.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      console.log('onUpdate inside');
      this.update$.next();
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.update$.complete();
  }

  addCourse() {
    this.dialog.open(UncategorizeCourseDialogComponent).afterClosed().subscribe();
  }
}
