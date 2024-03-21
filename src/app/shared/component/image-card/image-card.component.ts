import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';

export interface IImageCardOption {
  haveDelete?: boolean;
  haveClose?: boolean;
  haveCheckbox?: boolean;
}

@Component({
  selector: 'app-image-card',
  styleUrls: ['image-card.component.scss'],
  templateUrl: 'image-card.component.html',
})
export class ImageCardComponent {
  @Input() src: string;
  @Input() alt: string;
  // @Input() name: string;
  // @Input() description: string;
  @Input() isEdit: boolean;
  @Input() isCheck: boolean;
  @Input() option: IImageCardOption = {
    haveDelete: false,
    haveClose: false,
    haveCheckbox: false,
  };

  constructor(private dialog: MatDialog) {}

  @Output() checkChange = new EventEmitter();
  check() {
    this.checkChange.emit();
  }

  @Output() onCloseClick = new EventEmitter();
  closeClick() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xác nhận xóa khóa học khỏi danh mục này?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onCloseClick.emit();
    });

    event.stopPropagation();
  }

  @Output() onDeleteClick = new EventEmitter();
  deleteClick(event: any) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xác nhận xóa khóa học?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDeleteClick.emit();
    });

    event.stopPropagation();
  }
}
