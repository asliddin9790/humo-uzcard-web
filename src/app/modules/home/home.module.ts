import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    SharedModule,
    DemoRoutingModule
  ],
})
export class HomeModule { }
