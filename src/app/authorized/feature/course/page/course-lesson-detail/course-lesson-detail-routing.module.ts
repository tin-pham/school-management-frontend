import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLessonDetailComponent } from './course-lesson-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourseLessonDetailComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../container/lesson-tab/lesson-tab.module').then(m => m.LessonTabModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLessonDetailRoutingModule {}
