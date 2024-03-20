import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '@core/services/api/teacher.service';
import { TeacherUpdateDTO } from '@shared/models/dto/teacher.dto';
import { TeacherGetDetailRO } from '@shared/models/ro/teacher.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-teacher-edit',
  styleUrls: ['teacher-edit.component.scss'],
  templateUrl: 'teacher-edit.component.html',
})
export class TeacherEditComponent implements OnInit {
  teacher: TeacherGetDetailRO;
  teacherId: string;

  dto = new TeacherUpdateDTO();
  confirmPassword: string;

  get confirmPasswordRequired(): boolean {
    return !this.dto.password;
  }

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _teacherService: TeacherService,
  ) {}

  ngOnInit() {
    this.teacherId = this.route.snapshot.paramMap.get('id');
    this._teacherService.getDetail(this.teacherId).subscribe(response => {
      this.teacher = response;
      this.dto.displayName = response.displayName;
      this.dto.phone = response.phone;
      this.dto.email = response.email;
    });
  }

  update() {
    this._teacherService.update(this.teacherId, this.dto).subscribe(() => {
      this.toast.success('Cập nhật thành công');
    });
  }
}
