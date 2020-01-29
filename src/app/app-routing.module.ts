import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/base/base.module#BaseModule' },
  { path: 'event', loadChildren: './modules/event/event.module#EventModule' },
  { path: 'health', loadChildren: './modules/health/health.module#HealthModule' },
  { path: 'network', loadChildren: './modules/network/network.module#NetworkModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

