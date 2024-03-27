import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterBase, IFilterOption } from '@core/base/filter.base';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionGetListDTO } from '@shared/models/dto/question.dto';
import { capitalizeFirstLetter } from '@shared/util/capitalize-first-letter';

@Component({
  selector: 'app-question-list-difficulty-filter',
  styleUrls: ['question-list-difficulty-filter.component.scss'],
  templateUrl: 'question-list-difficulty-filter.component.html',
})
export class QuestionListDifficultyFilterComponent extends FilterBase<QuestionGetListDTO> implements OnInit {
  label = 'Độ khó';
  dto = new QuestionGetListDTO();
  filterOptions: IFilterOption[];
  propertiesToDelete = ['difficultyId'];

  constructor(private _difficultyService: DifficultyService) {
    super();
  }

  ngOnInit() {
    this._difficultyService.getList().subscribe(response => {
      this.filterOptions = response.data.map(difficulty => {
        return {
          label: capitalizeFirstLetter(difficulty.name),
          setValue: () => {
            this.dto.difficultyId = difficulty.id;
          },
        };
      });
    });
  }

  @Output() onFilter = new EventEmitter<QuestionGetListDTO>();
}
