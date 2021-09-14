import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UzcardTerminalComponent } from './uzcard-terminal.component';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {UzcardTerminalRoutingModule} from './uzcard-terminal-routing';
import { CbsLibModule } from 'cbs-lib';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';
import {ContextMenuModule} from 'primeng/contextmenu';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [UzcardTerminalComponent],
  exports: [
    UzcardTerminalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UzcardTerminalRoutingModule,
    DialogModule,
    ButtonModule,
    FieldsetModule,
    CbsLibModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ContextMenuModule,
    InputTextModule,
  ]
})
export class UzcardTerminalModule { }
