import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-exercise-detail-header',
  styleUrls: ['exercise-detail-header.component.scss'],
  templateUrl: 'exercise-detail-header.component.html',
})
export class ExerciseDetailHeaderComponent {
  @Input() exercise: ExerciseGetDetailRO;
  @Input() exerciseId: number;
  @Input() selectedQuestionIds: number[];
  @Input() isStudent: boolean;
  @Input() totalItems: number;
  @Input() isSubmitted: boolean;
  isCountdownActive: boolean = false; // New property to track countdown status

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // Initialize the countdown timer here, for example, 5 minutes.
    if (this.exercise.isStartDoing && !this.exercise.isSubmitted) {
      this.startCountdown();
    }
  }

  @Output() onActivateClicked = new EventEmitter();
  activateClicked() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Kích hoạt bài tập này?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onActivateClicked.emit();
    });
  }

  @Output() onRemoveClicked = new EventEmitter();
  removeClicked() {
    this.onRemoveClicked.emit();
  }

  countdown: string;
  private timerSubscription: Subscription;

  startCountdown() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Clear the existing timer if any
    }

    this.isCountdownActive = true; // Set to true when countdown starts
    const startTime = new Date(this.exercise.startDoingAt).getTime();
    const duration = this.exercise.time * 60000; // Convert minutes to milliseconds
    const endTime = startTime + duration;

    this.timerSubscription = timer(0, 1000).subscribe(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        this.timerSubscription.unsubscribe();
        this.countdown = '00:00:00';
        // Handle timeout, for example, auto-submitting the exercise
      } else {
        // Time calculations for hours, minutes and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in a variable
        this.countdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;
      }
    });
  }

  stopCountdown() {
    if (this.timerSubscription) {
      this.isCountdownActive = false;
      this.timerSubscription.unsubscribe();
    }
  }
}
