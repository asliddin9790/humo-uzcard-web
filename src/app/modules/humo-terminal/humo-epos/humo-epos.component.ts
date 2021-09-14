import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HumoEposParameter} from "../../../model/humo-epos-parameter";
import {HumoEposService} from "./humo-epos.service";
import {NgForm} from "@angular/forms";
import {HumoTerminalComponent} from "../humo-terminal.component";

@Component({
  selector: 'app-humo-epos',
  templateUrl: './humo-epos.component.html',
  styleUrls: ['./humo-epos.component.css']
})
export class HumoEposComponent implements OnInit {
  // @ts-ignore
  @ViewChild('fEPOS') formEPOS: NgForm;
    // @ts-ignore
  @Input() showAtmForm= new HumoTerminalComponent();

  // @ts-ignore
  humoEposParameters: HumoEposParameter;
  create=localStorage.getItem('creat')
  edit=localStorage.getItem('edit')

  merchantId='';
  terminalType='';
  terminalKind='';
  pointCodeTerminal='';
  installationDate='';
  terminalStatus='';
  numberOfTerminal='';
  account='';

  constructor(private humoEPOSService: HumoEposService) { }

  ngOnInit(): void {
    this.humoEposParameters = this.humoEPOSService.addParameters();
    this.merchantId = 'J09810095338307-OOO EFOOD';
    this.account = '23504000200950907200';
  }

  onSubmit(){
  }

  cancelEPosForm() {
    this.showAtmForm.openAtmFormTerminal('ePosList');
  }





}
