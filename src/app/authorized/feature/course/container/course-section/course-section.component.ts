import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionGetListDataRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-section',
  styleUrls: ['course-section.component.scss'],
  templateUrl: 'course-section.component.html',
})
export class CourseSectionComponent implements OnInit {
  private _section: SectionGetListDataRO;
  lessonTitles: string[];
  courseId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
  }

  @Input()
  set section(section: SectionGetListDataRO) {
    this._section = section;
    this.lessonTitles = section.lessons.map(lesson => lesson.title);
  }

  get section() {
    return this._section;
  }
}
