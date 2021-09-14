import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HumoPosService} from "./humo-pos.service";
import {NgForm} from "@angular/forms";
import {HumoTerminalComponent} from "../humo-terminal.component";

@Component({
  selector: 'app-humo-pos',
  templateUrl: './humo-pos.component.html',
  styleUrls: ['./humo-pos.component.css']
})
export class HumoPosComponent implements OnInit {
// @ts-ignore
  @ViewChild('fPOS') formPOS: NgForm;
   // @ts-ignore
  @Input() showAtmForm = new HumoTerminalComponent();

// @ts-ignore
  humoPOSParameters: HumoPosParameter;
  create = localStorage.getItem('creat')
  edit = localStorage.getItem('edit')

  merchantId='';
  terminalType='';
  terminalKind='';
  guide='';
  pointCodeTerminal='';
  installationDate='';
  terminalStatus='';
  numberOfTerminal='';
  terminalSerialType='';
  terminalSerialNumber='';
  terminalModel='';
  connectionInterface='';
  hostConnectionMethod='';
  tmcServerAccount='';
  configurableHostConnectionMethod='';
  terminalBusinessType='';
  account='';


  constructor(private humoPOSService: HumoPosService) {
  }

  ngOnInit(): void {
    this.humoPOSParameters = this.humoPOSService.addParameters();
    this.merchantId = 'J09810095338307-OOO EFOOD';
    this.account = '23504000200950907200';
  }

  onSubmit() {
    console.log(this.formPOS);
    //this.formPOS.reset();
  }

  cancelPosForm() {
    this.showAtmForm.openAtmFormTerminal('posList');
  }
}
