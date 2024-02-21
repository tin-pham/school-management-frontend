import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/api/user.service';

@Component({
  selector: 'app-authorized',
  styleUrls: ['authorized.component.scss'],
  templateUrl: 'authorized.component.html',
})
export class AuthorizedComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getProfile({ withImage: true }).subscribe(response => {
      this._userService.setProfile(response);
    });
  }
}
