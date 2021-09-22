import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumoFileProsessingComponent } from './humo-file-prosessing.component';
import {HumoFileRouterModule} from './humo-file-router.module';
import {CbsLibModule} from 'cbs-lib';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [HumoFileProsessingComponent],
  imports: [
    CommonModule,
    HumoFileRouterModule,
    CbsLibModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule
  ]
})
export class HumoFileProsessingModule { }
