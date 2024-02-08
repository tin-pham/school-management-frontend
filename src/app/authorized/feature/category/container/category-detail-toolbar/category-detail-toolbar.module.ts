import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryDetailToolbarComponent } from './category-detail-toolbar.component';

const COMPONENTS = [CategoryDetailToolbarComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [CategoryService],
  exports: [...COMPONENTS],
})
export class CategoryDetailToolbarModule {}
