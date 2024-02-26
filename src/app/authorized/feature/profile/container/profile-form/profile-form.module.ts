import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserImageService } from '@core/services/api/user-image.service';
import { ProfileFormComponent } from './profile-form.component';

const COMPONENTS = [ProfileFormComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [UserImageService],
  exports: [...COMPONENTS],
})
export class ProfileFormModule {}
