import { NgModule } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [CategoryComponent],
  providers: [CategoryService],
  imports: [CategoryRoutingModule],
})
export class CategoryModule {}
