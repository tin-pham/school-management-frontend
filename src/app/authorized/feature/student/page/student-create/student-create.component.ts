import { Component } from '@angular/core';
import { CacheForm } from '@core/base/cache-form.base';
import { StudentService } from '@core/services/api/student.service';
import { CacheStorageService } from '@core/services/cache.service';
import { StudentStoreDTO } from '@shared/models/dto/student.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-student-create',
  styleUrls: ['student-create.component.scss'],
  templateUrl: 'student-create.component.html',
})
export class StudentCreateComponent extends CacheForm<StudentStoreDTO> {
  dto = new StudentStoreDTO();

  constructor(
    _cacheService: CacheStorageService,
    private toast: ToastrService,
    private _studentService: StudentService,
  ) {
    super(_cacheService, 'student-create', ['password']);
  }

  create() {
    this._studentService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo thành công');
      this.clearForm();
      window.history.back();
    });
  }

  clearForm() {
    this.dto = new StudentStoreDTO();
    this.removeCache();
  }
}
