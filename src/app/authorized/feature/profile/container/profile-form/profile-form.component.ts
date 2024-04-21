import { Component, OnInit } from '@angular/core';
import { UserImageService } from '@core/services/api/user-image.service';
import { UserService } from '@core/services/api/user.service';
import { UserUpdateDTO } from '@shared/models/dto/user.dto';
import { UserGetProfileRO } from '@shared/models/ro/user.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  styleUrls: ['profile-form.component.scss'],
  templateUrl: 'profile-form.component.html',
})
export class ProfileFormComponent implements OnInit {
  user: UserGetProfileRO;
  userUpdating: UserUpdateDTO;
  confirmPassword: string;
  image: File;

  constructor(
    private toast: ToastrService,
    private _userService: UserService,
    private _userImageService: UserImageService,
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this._userService.getProfile().subscribe(user => {
      this.user = user;
      this.userUpdating = new UserUpdateDTO(user);
      this._userService.setProfile(user);
    });
  }

  update() {
    if (!this.comparePasswords()) {
      this.toast.error('Mật khẩu không trùng khớp');
      return;
    }

    this._userService
      .updateProfile(this.userUpdating)
      .pipe(
        switchMap(() => {
          if (this.image) {
            return this._userImageService.upsert({ files: [this.image] });
          } else {
            return of(null); // Return an observable that immediately completes if no image is set
          }
        }),
      )
      .subscribe(() => {
        this.toast.success('Lưu thay đổi thành công');
        this.userUpdating = new UserUpdateDTO();
        this.loadProfile();
      });
    // Delete current image if it already have
    // if (this.user.imageUrl && this.image) {
    //   this._s3Service
    //     .bulkDelete({ urls: [this.user.image.url] })
    //     .pipe(switchMap(() => this._attachmentService.bulkDelete({ ids: [this.user.imageId] })))
    //     .subscribe();
    // }
    //
    // this._s3Service
    //   .bulkUpload({ files: [this.image], directoryPath: 'users' })
    //   .pipe(
    //     switchMap(response => this._attachmentService.store(response.data[0])),
    //     tap(attachment => (this.userUpdating.imageId = attachment.id)),
    //     switchMap(() => this._userService.updateProfile(this.userUpdating)),
    //   )
    //   .subscribe(() => {
    //     this.toast.success('Lưu thay đổi thành công');
    //     this.loadProfile();
    //   });
  }

  cancel() {
    this.userUpdating = new UserUpdateDTO(this.user);
  }

  comparePasswords(): boolean {
    return this.userUpdating.password === this.confirmPassword;
  }

  onFileInputChange(event) {
    this.image = event.target.files[0];
  }
}
