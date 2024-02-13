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
      {
        path: ':id',
        loadChildren: () => import('./page/course-detail/course-detail.module').then(m => m.CourseDetailModule),
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./page/course-detail-edit/course-detail-edit.module').then(m => m.CourseDetailEditModule),
      },
      {
        path: ':id/section/:sectionId',
        loadChildren: () => import('./page/course-section-detail/course-section-detail.module').then(m => m.CourseSectionDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
