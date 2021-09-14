import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UzcardTerminalComponent} from './uzcard-terminal.component';

const routes: Routes = [
  {
    path: '',
    component: UzcardTerminalComponent, children: [
      {path: 'uzcard/terminal', component: UzcardTerminalComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UzcardTerminalRoutingModule {
}
