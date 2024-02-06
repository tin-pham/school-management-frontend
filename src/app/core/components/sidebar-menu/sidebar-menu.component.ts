import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ROLE } from '@core/constants/role.constant';
import { AuthService } from '@core/services/api/auth.service';
import { LoginUserRO } from '@shared/models/ro/auth.ro';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar-menu',
  styleUrls: ['./sidebar-menu.component.scss'],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent implements OnInit, OnDestroy {
  @Output() isShowMenu = new EventEmitter();
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  _user: LoginUserRO = null;

  @ViewChild(SidebarMenuComponent) sidebarMenu!: SidebarMenuComponent;
  isAuthenticated = false;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly observer: BreakpointObserver,
    private readonly cd: ChangeDetectorRef,
    private readonly _authService: AuthService,
  ) {
    this.isAuthenticated = this._authService.isAuthenticated();
  }

  onToggleSidebar() {
    this.toggle();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }

      this.cd.detectChanges();
    });
  }

  toggle() {
    console.log('oke2');
    this.sidenav.toggle();
  }

  ngOnInit() {
    this._authService.user$.pipe(takeUntil(this.destroy$)).subscribe(user => {
      this._user = user;
      this.isShowMenu.emit(this._user);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isAdmin() {
    return this._user?.roles.includes(ROLE.ADMIN);
  }

  isTeacher() {
    return this._user?.roles.includes(ROLE.TEACHER);
  }

  isStudent() {
    return this._user?.roles.includes(ROLE.STUDENT);
  }
}
