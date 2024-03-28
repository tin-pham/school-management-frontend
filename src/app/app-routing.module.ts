import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from '@core/guards/auth.guard';
import { SidebarMenuComponent } from '@core/components/sidebar-menu/sidebar-menu.component';
import { roleGuard } from '@core/guards/role.guard';
import { ROLE } from '@core/constants/role.constant';

export const routes: Routes = [
  {
    path: '',
    component: SidebarMenuComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
  },
  {
    path: '403',
    loadChildren: () => import('./forbidden/forbidden.module').then(m => m.ForbiddenModule),
  },
  {
    path: 'course/:id/section/:sectionId/lesson/:lessonId',
    loadChildren: () =>
      import('./authorized/feature/course/page/course-lesson-detail/course-lesson-detail.module').then(m => m.CourseLessonDetailModule),
    canActivate: [roleGuard([ROLE.STUDENT])],
  },
  {
    path: 'exercise',
    loadChildren: () => import('./authorized/feature/exercise/exercise.module').then(m => m.ExerciseModule),
    canActivate: [roleGuard([ROLE.STUDENT])],
  },
];

const config: ExtraOptions = {
  useHash: false,
  paramsInheritanceStrategy: 'always',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
