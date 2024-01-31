import { NgModule } from '@angular/core';
import { ToastrModule as AngularToastrModule } from 'ngx-toastr';
import { ToastrService } from './toastr.service';

@NgModule({
  imports: [AngularToastrModule.forRoot()],
  providers: [ToastrService],
  exports: [AngularToastrModule],
})
export class ToastrModule {}
