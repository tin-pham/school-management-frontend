import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '@core/services/api/section.service';
import { SectionStoreDTO } from '@shared/models/dto/section.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-section-create',
  styleUrls: ['course-section-create.component.scss'],
  templateUrl: 'course-section-create.component.html',
})
export class CourseSectionCreateComponent implements OnInit {
  name: string;
  courseId: number;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private sectionService: SectionService,
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
  }

  create() {
    const dto = new SectionStoreDTO({ name: this.name, courseId: this.courseId });
    this.sectionService.store(dto).subscribe(() => {
      this.toast.success('Tạo chương thành công');
      window.history.back();
    });
  }
}
