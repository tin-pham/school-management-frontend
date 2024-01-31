import { Injectable, NgZone } from '@angular/core';
import { ToastrService as AngularToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(
    private readonly toastr: AngularToastrService,
    private zone: NgZone,
  ) {}

  error(exception: string) {
    this.zone.run(() => {
      this.toastr.error(exception);
    });
  }

  success(message: string) {
    this.zone.run(() => {
      this.toastr.success(message);
    });
  }
}
