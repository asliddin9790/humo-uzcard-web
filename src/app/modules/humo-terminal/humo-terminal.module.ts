import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HumoTerminalRoutingModule} from './humo-terminal-routing.module';
import {HumoPosComponent} from './humo-pos/humo-pos.component';
import {HumoEposComponent} from './humo-epos/humo-epos.component';
import {HumoAtmComponent} from './humo-atm/humo-atm.component';
import {HumoContractComponent} from './humo-contract/humo-contract.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ListAtmComponent} from './list-atm/list-atm.component';
import {ListPosComponent} from './list-pos/list-pos.component';
import {ListEposComponent} from './list-epos/list-epos.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {CbsLibModule} from 'cbs-lib';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {HumoMerchantComponent} from './humo-merchant/humo-merchant.component';
import {HumoContactsComponent} from './humo-contacts/humo-contacts.component';
import {HumoTerminalComponent} from './humo-terminal.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ClientListComponent } from './client-list/client-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [
    HumoPosComponent,
    HumoEposComponent,
    HumoAtmComponent,
    HumoContractComponent,
    HumoTerminalComponent,
    ListAtmComponent,
    ListPosComponent,
    ListEposComponent,
    ListContractComponent,
    HumoMerchantComponent,
    HumoContactsComponent,
    ClientListComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    HumoTerminalRoutingModule,
    FormsModule,
    CbsLibModule,
    NgxPaginationModule,
    NzPopconfirmModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DialogModule,
    SplitButtonModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  entryComponents: [
    HumoPosComponent,
    HumoEposComponent,
    HumoAtmComponent,
    HumoContractComponent,
    ListAtmComponent,
    ListPosComponent,
    ListEposComponent,
    ListContractComponent
  ]
})
export class HumoTerminalModule {

  // constructor(injector: Injector) {

  // const pos = createCustomElement(ListPosComponent, {injector: injector});
  // customElements.define('app-list-pos', pos);

  // const atm = createCustomElement(ListAtmComponent, {injector: injector});
  // customElements.define('app-list-atm', atm);


  // const epos = createCustomElement(ListEposComponent, {injector: injector});
  // customElements.define('app-list-epos', epos);

  // const contract = createCustomElement(ListContractComponent, {injector: injector});
  // customElements.define('app-list-contract', contract);


  // const atmForm = createCustomElement(HumoAtmComponent, {injector: injector});
  // customElements.define('app-humo-atm', atmForm);

  // const posForm = createCustomElement(HumoPosComponent, {injector: injector});
  // customElements.define('app-humo-pos', posForm);

  // const eposForm = createCustomElement(HumoEposComponent, {injector: injector});
  // customElements.define('app-humo-epos', eposForm);

  // const contractForm = createCustomElement(HumoContractComponent, {injector: injector});
  // customElements.define('app-humo-contract', contractForm);


  // }

}
