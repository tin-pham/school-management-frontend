import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { roleGuard } from '@core/guards/role.guard';
import { ROLE } from '@core/constants/role.constant';
import { AuthorizedComponent } from './authorized.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [roleGuard([ROLE.ADMIN])],
      },
      {
        path: 'student',
        loadChildren: () => import('./feature/student/student.module').then(m => m.StudentModule),
        canActivate: [roleGuard([ROLE.ADMIN])],
      },
      {
        path: 'course',
        loadChildren: () => import('./feature/course/course.module').then(m => m.CourseModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'category',
        loadChildren: () => import('./feature/category/category.module').then(m => m.CategoryModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: 'assignment',
        loadChildren: () => import('./feature/assignment/assignment.module').then(m => m.AssignmentModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'comment',
        loadChildren: () => import('./feature/comment/comment.module').then(m => m.CommentModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'home',
        loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: 'assignment-submit',
        loadChildren: () => import('./feature/assignment-submit/assignment-submit.module').then(m => m.AssignmentSubmitModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedRoutingModule {}
