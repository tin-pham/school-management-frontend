import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';
import { ROLE } from '@core/constants/role.constant';
import { CourseDetailComponent } from './course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../course-detail-home/course-detail-home.module').then(m => m.CourseDetailHomeModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'post',
        loadChildren: () => import('../course-post/course-post.module').then(m => m.CoursePostModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'post/create',
        loadChildren: () => import('../course-post-create/course-post-create.module').then(m => m.CoursePostCreateModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: 'post/:postId',
        loadChildren: () => import('../course-post-detail/course-post-detail.module').then(m => m.CoursePostDetailModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'post/:postId/edit',
        loadChildren: () => import('../course-post-edit/course-post-edit.module').then(m => m.CoursePostEditModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailRoutingModule {}
