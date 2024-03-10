import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseComponent,
    children: [
      {
        path: 'create',
        loadChildren: () => import('./page/exercise-create/exercise-create.module').then(m => m.ExerciseCreateModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./page/exercise-detail/exercise-detail.module').then(m => m.ExerciseDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRoutingModule {}
