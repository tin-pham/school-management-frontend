import { Component } from '@angular/core';
import { CacheForm } from '@core/base/cache-form.base';
import { TeacherService } from '@core/services/api/teacher.service';
import { CacheStorageService } from '@core/services/cache.service';
import { TeacherStoreDTO } from '@shared/models/dto/teacher.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-teacher-create',
  styleUrls: ['teacher-create.component.scss'],
  templateUrl: 'teacher-create.component.html',
})
export class TeacherCreateComponent extends CacheForm<TeacherStoreDTO> {
  dto = new TeacherStoreDTO();

  constructor(
    _cacheService: CacheStorageService,
    private toast: ToastrService,
    private _teacherService: TeacherService,
  ) {
    super(_cacheService, 'teacher-create', ['password']);
  }

  create() {
    this._teacherService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo thành công');
      this.clearForm();
      window.history.back();
    });
  }

  clearForm(): void {
    this.removeCache();
    this.dto = new TeacherStoreDTO();
  }
}
