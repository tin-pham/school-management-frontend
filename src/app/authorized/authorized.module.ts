import { NgModule } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { AuthorizedComponent } from './authorized.component';
import { AuthorizedRoutingModule } from './authorized-routing.module';

@NgModule({
  declarations: [AuthorizedComponent],
  imports: [AuthorizedRoutingModule],
  providers: [CategoryService],
  exports: [AuthorizedComponent],
})
export class AuthorizedModule {}
