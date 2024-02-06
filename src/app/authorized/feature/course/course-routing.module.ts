import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/course-list/course-list.module').then(m => m.CourseListModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./page/course-create/course-create.module').then(m => m.CourseCreateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
