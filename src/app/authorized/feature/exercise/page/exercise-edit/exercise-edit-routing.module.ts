import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseEditComponent } from './exercise-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseEditRoutingModule {}
