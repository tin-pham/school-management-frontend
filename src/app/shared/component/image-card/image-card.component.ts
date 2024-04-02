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
  @Input() id: number;
  @Input() thumnailText: string;
  @Input() src: string;
  @Input() alt: string;
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

  getBackgroundStyle(): string {
    if (!this.src) {
      // Only generate background if 'src' is not present
      const multiplier = 137; // Prime number as a multiplier to spread out hues more evenly
      const hash = (this.id * multiplier) % 360; // Multiply 'id' by a larger factor before modulo operation
      const color1 = `hsl(${hash}, 100%, 50%)`; // First color
      const color2 = `hsl(${(hash + 45) % 360}, 100%, 50%)`; // Second color, offset by 45 degrees

      return `linear-gradient(to right, ${color1}, ${color2})`;
    }
    return ''; // Return an empty string if 'src' is present, meaning no need for a generated background
  }
}
