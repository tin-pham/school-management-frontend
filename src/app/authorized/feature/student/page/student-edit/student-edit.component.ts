import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '@core/services/api/student.service';
import { StudentUpdateDTO } from '@shared/models/dto/student.dto';
import { StudentGetDetailRO } from '@shared/models/ro/student.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-student-edit',
  styleUrls: ['student-edit.component.scss'],
  templateUrl: 'student-edit.component.html',
})
export class StudentEditComponent implements OnInit {
  student: StudentGetDetailRO;
  studentId: string;

  dto = new StudentUpdateDTO();
  confirmPassword: string;

  get confirmPasswordRequired(): boolean {
    return !this.dto.password;
  }

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _studentService: StudentService,
  ) {}

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this._studentService.getDetail(this.studentId).subscribe(response => {
      this.student = response;
      this.dto.displayName = response.displayName;
      this.dto.phone = response.phone;
      this.dto.email = response.email;
    });
  }

  update() {
    this._studentService.update(this.studentId, this.dto).subscribe(() => {
      this.toast.success('Cập nhật thành công');
    });
  }
}
