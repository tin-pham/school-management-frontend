import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonDeletedComponent } from './lesson-deleted.component';
import { LessonDeletedRoutingModule } from './lesson-deleted-routing.module';

@NgModule({
  declarations: [LessonDeletedComponent],
  exports: [LessonDeletedComponent],
  imports: [LessonDeletedRoutingModule, SharedModule],
  providers: [],
})
export class LessonDeletedModule {}
