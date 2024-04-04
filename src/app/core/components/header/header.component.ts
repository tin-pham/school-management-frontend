import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
}
