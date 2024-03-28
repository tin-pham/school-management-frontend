import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AssignmentSubmitGradeService } from '@core/services/api/assignment-submit-grade.service';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentSubmitGradeFormDialogComponent } from '@features/assignment-submit/container/assignment-submit-grade-form-dialog/assignment-submit-grade-form-dialog.component';
import { AssignmentStoreDTO } from '@shared/models/dto/assignment.dto';
import { AssignmentSubmitGetDetailRO, AssignmentSubmitGetGradeRO } from '@shared/models/ro/assignment-submit.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-assignment-submit-detail',
  styleUrls: ['assignment-submit-detail.component.scss'],
  templateUrl: 'assignment-submit-detail.component.html',
})
export class AssignmentSubmitDetailComponent implements OnInit {
  dto = new AssignmentStoreDTO();
  submission: AssignmentSubmitGetDetailRO;
  grade: AssignmentSubmitGetGradeRO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private dialog: MatDialog,
    private _assignmentSubmitService: AssignmentSubmitService,
    private _assignmentSubmitGradeService: AssignmentSubmitGradeService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this._assignmentSubmitService.getDetail(id).subscribe(submission => {
      this.submission = submission;
    });
    this._assignmentSubmitService.getGrade(id).subscribe(grade => {
      this.grade = grade;
    });
  }

  delete() {
    this._assignmentSubmitGradeService.delete(this.grade.id).subscribe(() => {
      this.toast.success('Xóa điểm thành công');
      this.grade = null;
    });
  }
  onGrade() {
    const dialogRef = this.dialog.open(AssignmentSubmitGradeFormDialogComponent, {
      width: '500px', // adjust size as needed
      data: { submissionId: this.submission.id }, // pass necessary data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      // Handle the result if necessary
      if (result) {
        // Update your component state based on the grading result
      }
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
