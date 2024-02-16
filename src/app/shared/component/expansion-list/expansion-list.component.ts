import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { IBasicListItem } from '../basic-list/basic-list.component';

@Component({
  selector: 'app-expansion-list',
  styleUrls: ['./expansion-list.component.scss'],
  templateUrl: './expansion-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExpansionListComponent {
  @Input() title: string;
  @Input() items: IBasicListItem[] = [];
  @Input() editRoute: string;
  @Input() addRoute: string;
  @Input() addIcon: boolean;
  @Input() expandIcon: boolean;
  @Input() editIcon: boolean;
  @Input() deleteIcon: boolean;
  toggle: boolean;
  @Output() delete = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  onDelete() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.delete.emit();
    });
  }

  @Output() editClicked = new EventEmitter<number>();
  onEditClicked(id: number) {
    this.editClicked.emit(id);
  }

  @Output() itemClicked = new EventEmitter<number>();
  onItemClicked(id: number) {
    console.log(id);
    this.itemClicked.emit(id);
  }
}
