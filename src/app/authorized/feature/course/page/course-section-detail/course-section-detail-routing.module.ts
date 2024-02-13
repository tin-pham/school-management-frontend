import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionDetailComponent } from './course-section-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourseSectionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSectionDetailRoutingModule {}
