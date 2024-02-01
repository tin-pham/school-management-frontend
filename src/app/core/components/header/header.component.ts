import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  mobileSearchVisibility = false;

  showMobileSearch() {
    this.mobileSearchVisibility = true;
  }

  hideMobileSearch() {
    this.mobileSearchVisibility = false;
  }
}
