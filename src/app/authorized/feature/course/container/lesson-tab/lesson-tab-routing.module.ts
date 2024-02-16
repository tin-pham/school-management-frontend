import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonTabComponent } from './lesson-tab.component';

const routes: Routes = [
  {
    path: '',
    component: LessonTabComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../page/lesson-body/lesson-body.module').then(m => m.LessonBodyModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonTabRoutingModule {}
