import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { S3Service } from '@core/services/api/s3.service';
import { LessonAttachmentService } from '@core/services/api/lesson-attachment.service';
import { DownloadDirective } from '@shared/directive/download.directive';
import { LessonDownloadModule } from '../../container/lesson-download/lesson-download.module';
import { LessonAttachmentComponent } from './lesson-attachment.component';
import { LessonAttachmentRoutingModule } from './lesson-attachment-routing.module';

@NgModule({
  declarations: [LessonAttachmentComponent, DownloadDirective],
  imports: [LessonAttachmentRoutingModule, SharedModule, LessonDownloadModule],
  providers: [S3Service, LessonAttachmentService],
})
export class LessonAttachmentModule {}
