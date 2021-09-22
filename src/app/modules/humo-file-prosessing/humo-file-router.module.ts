import {RouterModule, Routes} from '@angular/router';
import {HumoFileProsessingComponent} from './humo-file-prosessing.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HumoFileProsessingComponent,
    children: [
      {path: 'file-prosessing', component: HumoFileProsessingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumoFileRouterModule {
}
