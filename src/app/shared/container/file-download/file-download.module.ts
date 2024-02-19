import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FileDownloadComponent } from './file-download.component';

@NgModule({
  imports: [SharedModule],
  declarations: [FileDownloadComponent],
  exports: [FileDownloadComponent],
})
export class FileDownloadModule {}
