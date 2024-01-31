import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from './toastr/toastr.module';

const SHARED_MODULES = [CommonModule, FormsModule, MaterialModule, ToastrModule];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class SharedModule {}
