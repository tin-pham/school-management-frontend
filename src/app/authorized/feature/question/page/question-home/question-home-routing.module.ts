import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionHomeComponent } from './question-home.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionHomeRoutingModule {}
