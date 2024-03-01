import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RouterModule } from '@angular/router';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { ClearableInputComponent } from './clearable-input/clearable-input.component';
import { TextInputGroupComponent } from './form-group/text-input-group/text-input-group.component';
import { PrimaryButtonComponent } from './button/primary-button/primary-button.component';
import { TextareaGroupComponent } from './form-group/textarea-group/textarea-group.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { SelectSearchComponent } from './form-group/select-search/select-search.component';
import { FilesInputGroupComponent } from './form-group/files-input-group/files-input-group.component';
import { FileInputGroupComponent } from './form-group/file-input-group/file-input-group.component';
import { SelectMultipleSearchComponent } from './form-group/select-multiple-search/select-multiple-search.component';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { BasicFileComponent } from './icon/basic-file/basic-file.component';
import { VideoFileComponent } from './icon/video-file/video-file.component';
import { CodeFileComponent } from './icon/code-file/code-file.component';
import { WarnButtonComponent } from './button/warn-button/warn-button.component';
import { DatePickerComponent } from './form-group/date-picker/date-picker.component';
import { DateTimePickerComponent } from './form-group/date-time-picker/date-time-picker.component';
import { SelectListComponent } from './form-group/select-list/select-list.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

export const SHARED_COMPONENTS: Array<Type<any>> = [
  ClearableInputComponent,
  TextInputGroupComponent,
  PrimaryButtonComponent,
  WarnButtonComponent,
  TextareaGroupComponent,
  ImageCardComponent,
  SelectSearchComponent,
  FilesInputGroupComponent,
  FileInputGroupComponent,
  SelectMultipleSearchComponent,
  ExpansionListComponent,
  BasicListComponent,
  BasicFileComponent,
  VideoFileComponent,
  CodeFileComponent,
  DatePickerComponent,
  DateTimePickerComponent,
  SelectListComponent,
  DocumentViewerComponent,
];

const SHARED_MODULES: Array<Type<any>> = [
  CommonModule,
  MaterialModule,
  MaterialFileInputModule,
  FormsModule,
  RouterModule,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
];

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
