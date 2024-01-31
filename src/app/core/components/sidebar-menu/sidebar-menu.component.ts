import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sidebar-menu',
  styleUrls: ['./sidebar-menu.component.scss'],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent implements OnInit {
  @Output() isShowMenu = new EventEmitter();
  menuItems: any[] = [];
  showMenuItem = false;
  showMenu = false;
  loading = true;

  menuExpand = new Subject();
  firstChild = '';

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.loading = false;
  }

  onShowSubMenu(item: any) {
    this.showMenuItem = true;
    if (!this.showMenu) {
      this.showMenu = true;
      this.isShowMenu.next(true);
    } else {
      item.expanded = !item.expanded;
      this.menuItems = this.menuItems.map(menu => {
        if (menu.isActive) {
          menu.expandIcon = menu.expanded ? 'up-gray' : 'down-gray';
        } else {
          menu.expandIcon = menu.expanded ? 'up-white' : 'down-white';
        }
        return menu;
      });
    }
  }

  onNavigate(item: any, subMenu: any) {
    console.log(item, subMenu);
  }
}
