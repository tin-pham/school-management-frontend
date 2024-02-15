import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonFormComponent } from './lesson-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LessonFormComponent],
  providers: [],
  exports: [LessonFormComponent],
})
export class LessonFormModule {}
