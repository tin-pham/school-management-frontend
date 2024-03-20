import { Component } from '@angular/core';
import { TeacherService } from '@core/services/api/teacher.service';
import { TeacherStoreDTO } from '@shared/models/dto/teacher.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-teacher-create',
  styleUrls: ['teacher-create.component.scss'],
  templateUrl: 'teacher-create.component.html',
})
export class TeacherCreateComponent {
  dto = new TeacherStoreDTO();

  constructor(
    private toast: ToastrService,
    private _teacherService: TeacherService,
  ) {}

  create() {
    this._teacherService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo thành công');
      window.history.back();
    });
  }
}
