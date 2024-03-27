import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionListDifficultyFilterComponent } from './question-list-difficulty-filter.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionListDifficultyFilterComponent],
  providers: [DifficultyService],
  exports: [QuestionListDifficultyFilterComponent],
})
export class QuestionListDifficultyFilterModule {}
