import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonDownloadComponent } from './lesson-download.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LessonDownloadComponent],
  providers: [],
  exports: [LessonDownloadComponent],
})
export class LessonDownloadModule {}
