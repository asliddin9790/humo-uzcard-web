import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HumoTerminalComponent} from "../humo-terminal.component";

@Component({
  selector: 'app-humo-contract',
  templateUrl: './humo-contract.component.html',
  styleUrls: ['./humo-contract.component.css']
})
export class HumoContractComponent implements OnInit {
  // @ts-ignore
  @ViewChild('fContract') formContract: NgForm;
    // @ts-ignore
  @Input() showAtmForm= new HumoTerminalComponent();

  create=localStorage.getItem('creat')
  edit=localStorage.getItem('edit')

  merchantId='';
  numberOfContract='';
  dateOfContract='';
  account='';
  humoCommisson='';
  humoFees='';
  internationalVisaCommission=';'
  internationalVisaFees='';
  masterCommission='';
  masterFees='';
  localVisaCommission='';
  localVisaFees='';

  constructor() { }

  ngOnInit(): void {
    this.merchantId = 'J09810095338307-OOO EFOOD';
    this.account = '23504000200950907200';
  }

  onSubmit(){
    console.log(this.formContract);
  }

  cancelContractForm() {
    this.showAtmForm.openAtmFormTerminal('contractList');
  }

}
