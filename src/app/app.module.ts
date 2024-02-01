import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

const FEATURES = [UnauthorizedModule];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, ...FEATURES, AppRoutingModule, StoreModule.forRoot({}, {})],
})
export class AppModule {}
