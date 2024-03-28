import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-document-viewer-dialog',
  styleUrls: ['./document-viewer-dialog.component.scss'],
  templateUrl: './document-viewer-dialog.component.html',
})
export class DocumentViewerDialogComponent {
  url: string;

  constructor(
    public dialogRef: MatDialogRef<DocumentViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DocumentViewerDialogModel,
  ) {
    // Update view with given values
    this.url = data.url;
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class DocumentViewerDialogModel {
  public url?: string;
  constructor(url: string) {
    this.url = url;
  }
}
