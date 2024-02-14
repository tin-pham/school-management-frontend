import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RouterModule } from '@angular/router';
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

export const SHARED_COMPONENTS: Array<Type<any>> = [
  ClearableInputComponent,
  TextInputGroupComponent,
  PrimaryButtonComponent,
  TextareaGroupComponent,
  ImageCardComponent,
  SelectSearchComponent,
  FilesInputGroupComponent,
  FileInputGroupComponent,
  SelectMultipleSearchComponent,
  ExpansionListComponent,
  BasicListComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, MaterialFileInputModule, RouterModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
