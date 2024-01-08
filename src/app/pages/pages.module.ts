import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [PagesRoutingModule, CoreModule],
  declarations: [PagesComponent],
})
export class PagesModule {}
