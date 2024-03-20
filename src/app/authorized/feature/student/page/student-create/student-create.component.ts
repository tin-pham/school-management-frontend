import { Component } from '@angular/core';
import { StudentService } from '@core/services/api/student.service';
import { StudentStoreDTO } from '@shared/models/dto/student.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-student-create',
  styleUrls: ['student-create.component.scss'],
  templateUrl: 'student-create.component.html',
})
export class StudentCreateComponent {
  dto = new StudentStoreDTO();

  constructor(
    private toast: ToastrService,
    private _studentService: StudentService,
  ) {}

  create() {
    this._studentService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo thành công');
      window.history.back();
    });
  }
}
