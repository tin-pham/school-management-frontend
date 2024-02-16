import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonTabComponent } from './lesson-tab.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LessonTabComponent],
  providers: [],
  exports: [LessonTabComponent],
})
export class LessonTabModule {}
