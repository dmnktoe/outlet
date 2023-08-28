import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MixesRoutingModule } from './mixes-routing.module';
import { MixesComponent } from './mixes.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MixesRoutingModule],
  declarations: [MixesComponent],
})
export class MixesModule {}
