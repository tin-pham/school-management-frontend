import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

const SHARED_MODULES = [CommonModule, FormsModule, MaterialModule];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class SharedModule {}
