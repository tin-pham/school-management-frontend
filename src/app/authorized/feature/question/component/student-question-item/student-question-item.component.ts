import { Component, Input, OnInit } from '@angular/core';
import { QuestionStudentGetListDataRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-student-question-item',
  styleUrls: ['student-question-item.component.scss'],
  templateUrl: 'student-question-item.component.html',
})
export class StudentQuestionItemComponent implements OnInit {
  @Input() question: QuestionStudentGetListDataRO;

  ngOnInit() {
    console.log(this.question);
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }
}
