import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '@core/services/api/section.service';
import { SectionGetDetailRO } from '@shared/models/ro/section.ro';

@Component({
  selector: 'app-course-section-detail',
  styleUrls: ['course-section-detail.component.scss'],
  templateUrl: 'course-section-detail.component.html',
})
export class CourseSectionDetailComponent implements OnInit {
  section: SectionGetDetailRO;

  constructor(
    private route: ActivatedRoute,
    private _sectionService: SectionService,
  ) {}

  ngOnInit() {
    const sectionId = this.route.snapshot.params['sectionId'];
    this._sectionService.getDetail(sectionId).subscribe(data => (this.section = data));
  }
}
