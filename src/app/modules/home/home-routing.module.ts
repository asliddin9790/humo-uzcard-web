import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {HumoMerchantComponent} from '../humo-terminal/humo-merchant/humo-merchant.component';
import {HumoContactsComponent} from '../humo-terminal/humo-contacts/humo-contacts.component';
import {ClientListComponent} from '../humo-terminal/client-list/client-list.component';


const routes: Routes = [{
  path : '' ,
  component : HomeComponent,
  children: [
    {
      path: 'humo',
      loadChildren: () =>
        import('../humo-terminal/humo-terminal.module').then(
          (m) => m.HumoTerminalModule
        ),
    },
    {
      path: 'humo/merchant',
      component: HumoMerchantComponent
      // loadChildren: () =>
      //   import('../humo-terminal/humo-terminal.module').then(
      //     (m) => m.HumoTerminalModule
      //   ),
    },
    {
      path: 'humo/contract',
      component: HumoContactsComponent
      // loadChildren: () =>
      //   import('../humo-terminal/humo-terminal.module').then(
      //     (m) => m.HumoTerminalModule
      //   ),
    },
    {
      path: 'humo/client',
      component: ClientListComponent
    },
    {
      path: 'uzcard',
      loadChildren: () =>
        import('../uzcard-terminal/uzcard-terminal.module').then(
          (m) => m.UzcardTerminalModule
        ),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
