import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLessonDetailComponent } from './course-lesson-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourseLessonDetailComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../page/lesson-body/lesson-body.module').then(m => m.LessonBodyModule),
      },
      {
        path: 'attachment',
        loadChildren: () => import('../../page/lesson-attachment/lesson-attachment.module').then(m => m.LessonAttachmentModule),
      },
      {
        path: 'assignment',
        loadChildren: () => import('../../page/lesson-assignment/lesson-assignment.module').then(m => m.LessonAssignmentModule),
      },
      {
        path: 'exercise',
        loadChildren: () => import('../../page/lesson-exercise/lesson-exercise.module').then(m => m.LessonExerciseModule),
      },
      {
        path: 'comment',
        loadChildren: () => import('../../page/lesson-comment/lesson-comment.module').then(m => m.LessonCommentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLessonDetailRoutingModule {}
