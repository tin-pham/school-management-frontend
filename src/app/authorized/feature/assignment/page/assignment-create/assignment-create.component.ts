import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentStoreDTO } from '@shared/models/dto/assignment.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-assignment-create',
  styleUrls: ['assignment-create.component.scss'],
  templateUrl: 'assignment-create.component.html',
})
export class AssignmentCreateComponent implements OnInit {
  dto = new AssignmentStoreDTO();

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _assignmentService: AssignmentService,
  ) {}

  ngOnInit() {
    this.dto.lessonId = +this.route.snapshot.queryParamMap.get('lessonId');
  }

  create() {
    this._assignmentService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo assignment thành công');
      this.dto = new AssignmentStoreDTO();
      window.history.back();
    });
  }
}
