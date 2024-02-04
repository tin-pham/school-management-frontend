import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryCreateComponent } from '../../component/category-create/category-create.component';
import { CategorySearchComponent } from '../../component/category-search/category-search.component';
import { CategoryToolbarComponent } from './category-toolbar.component';

const COMPONENTS = [CategoryToolbarComponent, CategoryCreateComponent, CategorySearchComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [CategoryService],
  exports: [...COMPONENTS],
})
export class CategoryToolbarModule {}
