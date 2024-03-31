import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from './toastr/toastr.module';
import { SharedComponentsModule } from './component/components.module';
import { VideoModule } from './component/video/video.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';

const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  ToastrModule,
  SharedComponentsModule,
  RouterModule,
  VideoModule,
  BootstrapModule,
];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class SharedModule {}
