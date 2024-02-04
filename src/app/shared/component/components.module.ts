import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { ClearableInputComponent } from './clearable-input/clearable-input.component';
import { TextInputGroupComponent } from './form-group/text-input-group/text-input-group.component';
import { PrimaryButtonComponent } from './button/primary-button/primary-button.component';
import { TextareaGroupComponent } from './form-group/textarea-group/textarea-group.component';

export const SHARED_COMPONENTS: Array<Type<any>> = [
  ClearableInputComponent,
  TextInputGroupComponent,
  PrimaryButtonComponent,
  TextareaGroupComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
