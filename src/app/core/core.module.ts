import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layouts/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const COMPONENTS = [LayoutComponent, HeaderComponent, SidebarMenuComponent, SpinnerComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, TranslateModule],
  declarations: [...COMPONENTS],
  exports: [CommonModule, TranslateModule, ...COMPONENTS],
})
export class CoreModule {}
