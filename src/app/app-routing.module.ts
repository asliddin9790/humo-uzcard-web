import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserRouteAccessGuard, Error1Component} from 'cbs-lib';

export const routes: Routes = [
  {
    path: '',
    /*    //canActivate: [UserRouteAccessGuard],*/
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  // {
  //   path: 'humo',
  //   loadChildren: () =>
  //     import('./modules/humo-terminal/humo-terminal.module').then((m) => m.HumoTerminalModule),
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    component: Error1Component
  },

  {path: '**', redirectTo: 'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
