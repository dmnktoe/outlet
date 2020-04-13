import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesComponent } from './releases.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ReleasesRoutingModule],
  declarations: [ReleasesComponent],
})
export class ReleasesModule {}
