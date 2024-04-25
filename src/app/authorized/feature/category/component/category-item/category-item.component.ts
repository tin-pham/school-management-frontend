import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';

@Component({
  selector: 'app-category-item',
  styleUrls: ['category-item.component.scss'],
  templateUrl: 'category-item.component.html',
})
export class CategoryItemComponent {
  constructor(private dialog: MatDialog) {}

  @Input() isYourCategory: boolean;

  @Input() category: CategoryGetListDataRO;
  @Output() onDelete = new EventEmitter();
  delete(event: MouseEvent) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDelete.emit();
    });

    event.stopPropagation();
  }
}
