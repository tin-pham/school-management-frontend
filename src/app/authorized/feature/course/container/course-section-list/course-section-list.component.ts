import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-section-list',
  styleUrls: ['course-section-list.component.scss'],
  templateUrl: 'course-section-list.component.html',
})
export class CourseSectionListComponent implements OnInit {
  @Input() courseId: number;
  @Input() isYourCourse: boolean;

  sections: SectionGetListDataRO[];

  constructor(
    private _sectionService: SectionService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this._sectionService
      .getList({
        courseId: this.courseId,
        withLesson: true,
      })
      .subscribe({
        next: response => {
          this.sections = response.data;
        },
      });
  }

  onSectionDelete(id: number) {
    const index = this.sections.findIndex(section => section.id === id);
    if (index > -1) {
      this.sections.splice(index, 1);
    }
  }

  get isStudent() {
    return this._authService.isStudent();
  }
}
