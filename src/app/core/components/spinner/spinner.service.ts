import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, Event } from '@angular/router';
import { SpinnerComponent } from './spinner.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinner: ComponentRef<SpinnerComponent>;
  spinnerExist = false;
  isFirstTime = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private router: Router,
  ) {}

  show() {
    if (!this.spinnerExist) {
      this.spinner = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent).create(this.injector);
      this.spinner.instance.isFirstTime = this.isFirstTime;
      this.appRef.attachView(this.spinner.hostView);
      const domElem = (this.spinner.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.spinnerExist = true;
    }
  }

  hide() {
    if (this.spinnerExist) {
      this.appRef.detachView(this.spinner.hostView);
      this.spinner.destroy();
      this.spinnerExist = false;
    }
  }

  trackRouteLoadIndicator() {
    let asyncLoadCount = 0;

    this.router.events.subscribe((event: Event): void => {
      if (event instanceof RouteConfigLoadStart) {
        asyncLoadCount++;
      } else if (event instanceof RouteConfigLoadEnd) {
        asyncLoadCount--;
      }

      if (asyncLoadCount) {
        this.show();
      } else {
        this.hide();
      }
    });
  }
}
