import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeightDirective } from './directives/content-height.directive';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { CbsLibModule, DynamicAsideMenuService, Principal, UserRouteAccessGuard } from 'cbs-lib';
import { SessionStorageService } from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {DividerModule} from 'primeng/divider';

@NgModule({
  providers:[
    SessionStorageService,
    Principal,
    DynamicAsideMenuService
  ],
  declarations: [ContentHeightDirective],
  imports: [
    CommonModule ,
    DropdownModule ,
    FormsModule ,
    TableModule ,
    ConfirmDialogModule,
    //SubheaderModule ,
    DialogModule ,
    ToastModule,
    CbsLibModule.forRoot(
      {
        contextPath: '',
        applicationName: 'SKELETON' ,
        oauthClientId: ''
      }
    ),
    
    DividerModule ,
    NgbModule,
    DragDropModule
  ],
  exports : [
    ContentHeightDirective ,
    DropdownModule ,
    FormsModule ,
    TableModule ,
    ConfirmDialogModule,
    //SubheaderModule ,
    DialogModule ,
    ToastModule,
    CbsLibModule,
    DividerModule,
    NgbModule,
    DragDropModule

  ]
})
export class SharedModule { }
