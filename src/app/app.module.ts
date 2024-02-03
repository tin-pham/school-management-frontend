import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';
import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './app.provider';

const FEATURES = [UnauthorizedModule];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, ...FEATURES, AppRoutingModule],
  providers: [...APP_PROVIDERS],
})
export class AppModule {}
