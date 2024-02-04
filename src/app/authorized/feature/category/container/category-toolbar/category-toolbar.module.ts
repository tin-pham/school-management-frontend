import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { CategorySearchComponent } from '../../component/category-search/category-search.component';
import { CategoryCreateLinkComponent } from '../../component/category-create-link/category-create-link.component';
import { CategoryToolbarComponent } from './category-toolbar.component';

const COMPONENTS = [CategoryToolbarComponent, CategoryCreateLinkComponent, CategorySearchComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [CategoryService],
  exports: [...COMPONENTS],
})
export class CategoryToolbarModule {}
