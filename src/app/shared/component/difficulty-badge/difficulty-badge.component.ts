import { Component, Input } from '@angular/core';

export interface IDifficulty {
  id: number;
  name: string;
}
export enum DIFFICULTY {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
  VERY_HARD = 4,
}

@Component({
  selector: 'app-difficulty-badge',
  styleUrls: ['./difficulty-badge.component.scss'],
  templateUrl: './difficulty-badge.component.html',
})
export class DifficultyBadgeComponent {
  @Input() difficulty: IDifficulty;

  DIFFICULTY = DIFFICULTY;
}
