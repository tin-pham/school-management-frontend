import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonBodyComponent } from './lesson-body.component';
import { LessonBodyRoutingModule } from './lesson-body-routing.module';

@NgModule({
  declarations: [LessonBodyComponent],
  exports: [LessonBodyComponent],
  imports: [LessonBodyRoutingModule, SharedModule],
})
export class LessonBodyModule {}
