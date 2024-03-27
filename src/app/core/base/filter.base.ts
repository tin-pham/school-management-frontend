import { EventEmitter, Injectable } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

export interface IFilterOption {
  label: string;
  setValue: () => void;
}

@Injectable()
export abstract class FilterBase<DTO> {
  abstract dto: DTO;
  abstract filterOptions: IFilterOption[];
  abstract label: string;
  abstract propertiesToDelete: string[];

  deleteProperties(properties: string[]): void {
    properties.forEach((property: string) => {
      delete this.dto[property];
    });
  }

  abstract onFilter: EventEmitter<DTO>;
  filter(event: MatSelectChange) {
    const selectedOption = event.value;

    this.deleteProperties(this.propertiesToDelete);

    if (selectedOption) {
      selectedOption.setValue();
    }
    this.onFilter.emit(this.dto);
  }
}
