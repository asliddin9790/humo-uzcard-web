import { Injectable } from '@angular/core';
import {HumoAtmTerminal} from '../../../model/humo-atm-terminal';
import {HumoAtmParameter} from '../../../model/humo-atm-parameter';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HumoTerminalAtmService {

  // @ts-ignore
  private humoATM: HumoAtmTerminal;
  // @ts-ignore
  humoAtmParemeters: HumoAtmParameter;

  constructor(private httpClient: HttpClient) {
  }

  terminalTypes: any[] = ['POS Terminal', 'POS Terminal-1'];
  terminalKinds: any[] = ['Trade Point (POS)', 'Sale Point (POS)'];
  guides: any[] = ['Guide 1', 'Guide 2'];
  terminalStatuses: any[] = ['Active', 'Disabled'];
  terminalSerialTypes: any[] = ['NCR6622', 'MOV26'];

  addATMTerminal(formATM: any){
    this.humoATM.merchantId = formATM.merchantId;
    this.humoATM.terminalType = formATM.terminalType;
    this.humoATM.terminalKind = formATM.terminalKind;
    this.humoATM.guide = formATM.guide;
    this.humoATM.pointCodeTerminal = formATM.pointCodeTerminal;
    this.humoATM.installationDate = formATM.installationDate;
    this.humoATM.terminalStatus = formATM.terminalStatus;
    this.humoATM.terminalInventoryNumber = 1;
    this.humoATM.terminalSerialType = formATM.terminalSerialType;
    this.humoATM.terminalSerialNumber = formATM.terminalSerialNumber;
    this.humoATM.accountNumber = formATM.account;
  }

  addParameters(): HumoAtmParameter{
    this.humoAtmParemeters = new HumoAtmParameter(
      this.terminalTypes,
      this.terminalKinds,
      this.guides,
      this.terminalStatuses,
      this.terminalSerialTypes
    );
    return this.humoAtmParemeters;
  }
 editeatm(id: number){
    return  this.httpClient.get('url' + id);
 }
}
