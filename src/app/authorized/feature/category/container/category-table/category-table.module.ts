import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { RouterLink } from '@angular/router';
import { CategoryTableComponent } from './category-table.component';

@NgModule({
  imports: [SharedModule, RouterLink],
  declarations: [CategoryTableComponent],
  providers: [CategoryService],
  exports: [CategoryTableComponent],
})
export class CategoryTableModule {}
