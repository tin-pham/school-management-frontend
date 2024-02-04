import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { ClearableInputComponent } from './clearable-input/clearable-input.component';

export const SHARED_COMPONENTS: Array<Type<any>> = [ClearableInputComponent];

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
