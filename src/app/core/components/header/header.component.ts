import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  mobileSearchVisibility = false;
  searchTerm: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthService,
  ) {}

  showMobileSearch() {
    this.mobileSearchVisibility = true;
  }

  hideMobileSearch() {
    this.mobileSearchVisibility = false;
  }

  @Output() toggleSidebar = new EventEmitter();
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  routeToSearch() {
    if (this.searchTerm) {
      this.router.navigate(['/course/search'], { queryParams: { search: this.searchTerm } });
    }
  }

  isAdmin() {
    return this._authService.isAdmin();
  }
}
