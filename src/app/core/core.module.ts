import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';

import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    // FirstLetterPipe, SafePipe
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  exports: [
    // FirstLetterPipe, SafePipe
  ],
  providers : [MessageService]

})
export class CoreModule { }
