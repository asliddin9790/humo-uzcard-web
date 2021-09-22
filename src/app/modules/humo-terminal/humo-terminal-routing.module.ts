import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HumoTerminalComponent} from './humo-terminal.component';
import {HumoMerchantComponent} from './humo-merchant/humo-merchant.component';
import {HumoContractComponent} from './humo-contract/humo-contract.component';
import {ClientListComponent} from './client-list/client-list.component';


const routes: Routes = [{
  path: '',
  component: HumoTerminalComponent,
  children: [
    {path: 'humo/terminal', component: HumoTerminalComponent},
    {path: 'humo/merchant', component: HumoMerchantComponent},
    {path: 'humo/contract', component: HumoContractComponent},
    {path: 'humo/client', component: ClientListComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumoTerminalRoutingModule {
}
