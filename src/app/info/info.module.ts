import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [CommonModule, TranslateModule, InfoRoutingModule],
  declarations: [InfoComponent],
})
export class InfoModule {}
