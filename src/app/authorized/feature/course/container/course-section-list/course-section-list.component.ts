import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-section-list',
  styleUrls: ['course-section-list.component.scss'],
  templateUrl: 'course-section-list.component.html',
})
export class CourseSectionListComponent implements OnInit {
  sections: SectionGetListDataRO[];
  courseId: string;

  constructor(
    private route: ActivatedRoute,
    private _sectionService: SectionService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id');
    this.courseId = courseId.toString();

    this._sectionService
      .getList({
        courseId,
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

  isStudent() {
    return this._authService.isStudent();
  }
}
