import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';

@NgModule({
  imports: [CommonModule, TranslateModule, StoreRoutingModule],
  declarations: [StoreComponent],
})
export class StoreModule {}
