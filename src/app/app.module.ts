import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';
import { AppComponent } from './app.component';

const FEATURES = [UnauthorizedModule];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, ...FEATURES, AppRoutingModule],
})
export class AppModule {}
