import { NgModule } from '@angular/core';
import { AuthorizedComponent } from './authorized.component';
import { AuthorizedRoutingModule } from './authorized-routing.module';

@NgModule({
  declarations: [AuthorizedComponent],
  imports: [AuthorizedRoutingModule],
  exports: [AuthorizedComponent],
})
export class AuthorizedModule {}
