import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent, LoginComponent } from 'cbs-lib';



const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children : [
      {
          path: 'login',
        component: LoginComponent,
        data: {returnUrl: window.location.pathname}
      },
    ]
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //     data: {returnUrl: window.location.pathname}
    //   },
    //   {
    //     path: 'registration',
    //     component: RegistrationComponent
    //   },
    //   {
    //     path: 'forgot-password',
    //     component: ForgotPasswordComponent
    //   },
    //   {
    //     path: 'logout',
    //     component: LogoutComponent
    //   },
    //   {path: '', redirectTo: 'login', pathMatch: 'full'},
    //   {path: '**', redirectTo: 'login', pathMatch: 'full'},
    // ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
