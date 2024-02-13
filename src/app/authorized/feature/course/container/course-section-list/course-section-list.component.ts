import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-section-list',
  styleUrls: ['course-section-list.component.scss'],
  templateUrl: 'course-section-list.component.html',
})
export class CourseSectionListComponent implements OnInit {
  sections: SectionGetListDataRO[];

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
  ) {}

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id');

    this.sectionService
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
}
