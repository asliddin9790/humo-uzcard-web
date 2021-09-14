import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {HumoTerminalAtmService} from './humo-terminal-atm.service';
import {HumoAtmParameter} from '../../../model/humo-atm-parameter';
import {NgForm} from '@angular/forms';
import {HumoTerminalComponent} from '../humo-terminal.component';

@Component({
  selector: 'app-humo-atm',
  templateUrl: './humo-atm.component.html',
  styleUrls: ['./humo-atm.component.css']
})
export class HumoAtmComponent implements OnInit {

  create = localStorage.getItem('atmcreat');
  edit = localStorage.getItem('atmedit');
  // @ts-ignore
  @ViewChild('fATM') formATM: NgForm;
// @ts-ignore
  humoAtmParemeters: HumoAtmParameter;
  merchantId = '';
  terminalType = '';
  terminalKind = '';
  guide = '';
  pointCodeTerminal = '';
  installationDate = '';
  terminalStatus = '';
  numberOfTerminal = '';
  terminalSerialType = '';
  terminalSerialNumber = '';
  account = '';

  constructor(public humoATMService: HumoTerminalAtmService) {
  }

  ngOnInit() {

    this.humoAtmParemeters = this.humoATMService.addParameters();
    this.merchantId = 'J09810095338307-OOO EFOOD';
    this.account = '23504000200950907200';

  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.formATM);
    this.humoATMService.addATMTerminal(this.formATM);
    // this.formATM.reset();
  }


// @ts-ignore
  @Input() showAtmForm = new HumoTerminalComponent();


  // @Input() showAtmForm: HumoTerminalComponent;
  cancelAtmForm() {
    this.showAtmForm.openAtmFormTerminal('atmList');
  }
}
