import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { InfoComponent } from './info.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: InfoComponent, data: { title: extract('Outlet: Info') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class InfoRoutingModule {}
