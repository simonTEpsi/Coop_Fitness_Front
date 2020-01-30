import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'home', loadChildren: './modules/base/base.module#BaseModule' },
  //{ path: 'register', loadChildren: './modules/login/login.module#LoginModule' },
  /** 
  { path: '', loadChildren: () => import('./modules/base/base.module').then((m: any) => m.BaseModule) },
  { path: '**', redirectTo: '' }, */
  /*{ 
    path: 'members', 
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
