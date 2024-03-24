import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryItemComponent } from './category-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CategoryItemComponent],
  exports: [CategoryItemComponent],
})
export class CategoryItemModule {}
