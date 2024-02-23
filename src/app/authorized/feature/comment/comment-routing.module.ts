import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment.component';

const routes: Routes = [
  {
    path: '',
    component: CommentComponent,
    children: [
      {
        path: ':id',
        loadChildren: () => import('./page/comment-detail/comment-detail.module').then(m => m.CommentDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
