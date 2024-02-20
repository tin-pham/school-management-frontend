import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ROLE } from '@core/constants/role.constant';
import { AuthService } from '@core/services/api/auth.service';
import { UserService } from '@core/services/api/user.service';
import { LoginUserRO } from '@shared/models/ro/auth.ro';
import { UserGetProfileRO } from '@shared/models/ro/user.ro';
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
  profile: UserGetProfileRO;

  @ViewChild(SidebarMenuComponent) sidebarMenu!: SidebarMenuComponent;
  isAuthenticated = false;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly observer: BreakpointObserver,
    private readonly cd: ChangeDetectorRef,
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
  ) {
    this.isAuthenticated = this._authService.isAuthenticated();
  }

  ngOnInit() {
    this._authService.user$.pipe(takeUntil(this.destroy$)).subscribe(user => {
      this._user = user;
      this.isShowMenu.emit(this._user);
    });
    this._userService.profile$.pipe(takeUntil(this.destroy$)).subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleSidebar() {
    this.toggle();
  }

  toggle() {
    this.sidenav.toggle();
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
