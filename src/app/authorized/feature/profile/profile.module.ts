import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormModule } from './container/profile-form/profile-form.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ProfileRoutingModule, ProfileFormModule],
})
export class ProfileModule {}
