import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../course-detail-home/course-detail-home.module').then(m => m.CourseDetailHomeModule),
      },
      {
        path: 'post',
        loadChildren: () => import('../course-post/course-post.module').then(m => m.CoursePostModule),
      },
      {
        path: 'post/create',
        loadChildren: () => import('../course-post-create/course-post-create.module').then(m => m.CoursePostCreateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailRoutingModule {}
