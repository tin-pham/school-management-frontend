import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { DateTimePickerComponent } from './component/date-time-picker/date-time-picker.component';

const SHARED_MODULES = [CommonModule, MaterialModule, FormsModule];
const NG_BOOTSTRAP = [NgbPopoverModule, NgbTimepickerModule, NgbDatepickerModule];
const CUSTOM_COMPONENTS = [DateTimePickerComponent];

@NgModule({
  imports: [...NG_BOOTSTRAP, ...SHARED_MODULES],
  declarations: [...CUSTOM_COMPONENTS],
  exports: [...NG_BOOTSTRAP, ...CUSTOM_COMPONENTS],
})
export class BootstrapModule {}
