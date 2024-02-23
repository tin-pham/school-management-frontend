import { NgModule } from '@angular/core';
import { ForbiddenComponent } from './forbidden.component';
import { ForbiddenRoutingModule } from './forbidden-routing.module';

@NgModule({
  declarations: [ForbiddenComponent],
  imports: [ForbiddenRoutingModule],
  exports: [ForbiddenComponent],
})
export class ForbiddenModule {}
