import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';
import { ROLE } from '@core/constants/role.constant';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/course-list/course-list.module').then(m => m.CourseListModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'create',
        loadChildren: () => import('./page/course-create/course-create.module').then(m => m.CourseCreateModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: ':id',
        loadChildren: () => import('./page/course-detail/course-detail.module').then(m => m.CourseDetailModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./page/course-detail-edit/course-detail-edit.module').then(m => m.CourseDetailEditModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: ':id/section/:sectionId',
        loadChildren: () => import('./page/course-section-detail/course-section-detail.module').then(m => m.CourseSectionDetailModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/section',
        loadChildren: () => import('./page/course-section-create/course-section-create.module').then(m => m.CourseSectionCreateModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/section/:sectionId/lesson',
        loadChildren: () => import('./page/course-lesson-create/course-lesson-create.module').then(m => m.CourseLessonCreateModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/section/:sectionId/lesson/:lessonId',
        loadChildren: () => import('./page/course-lesson-detail/course-lesson-detail.module').then(m => m.CourseLessonDetailModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/section/:sectionId/lesson/:lessonId/edit',
        loadChildren: () => import('./page/course-lesson-edit/course-lesson-edit.module').then(m => m.CourseLessonEditModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: ':id/assignment',
        loadChildren: () => import('./page/course-assignment/course-assignment.module').then(m => m.CourseAssignmentModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
