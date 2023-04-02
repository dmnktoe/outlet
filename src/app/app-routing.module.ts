import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'info', loadChildren: () => import('./info/info.module').then((m) => m.InfoModule) },
    { path: 'releases', loadChildren: () => import('./releases/releases.module').then((m) => m.ReleasesModule) },
    { path: 'store', loadChildren: () => import('./store/store.module').then((m) => m.StoreModule) },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
