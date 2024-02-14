import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionCreateComponent } from './course-section-create.component';

const routes: Routes = [
  {
    path: '',
    component: CourseSectionCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSectionCreateRoutingModule {}
