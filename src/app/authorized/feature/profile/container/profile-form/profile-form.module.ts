import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { S3Service } from '@core/services/api/s3.service';
import { AttachmentService } from '@core/services/api/attachment.service';
import { ProfileFormComponent } from './profile-form.component';

const COMPONENTS = [ProfileFormComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [S3Service, AttachmentService],
  exports: [...COMPONENTS],
})
export class ProfileFormModule {}
