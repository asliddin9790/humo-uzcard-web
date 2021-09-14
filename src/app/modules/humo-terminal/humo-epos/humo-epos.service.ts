import { Injectable } from '@angular/core';
import {HumoEposParameter} from "../../../model/humo-epos-parameter";
import {HumoEposTerminal} from "../../../model/humo-epos-terminal";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HumoEposService {

  // @ts-ignore
  private humoEPOS: HumoEposTerminal;
  // @ts-ignore
  private hunoEPOSParameters: HumoEposParameter;

  terminalTypes: any[] =['POS Terminal','POS Terminal-1'];
  terminalKinds: any[] =['Trade Point (POS)', 'Sale Point (POS)'];
  terminalStatuses: any[] =['Active', 'Disabled'];

  constructor(private httpClient:HttpClient) {
  }

  addEPOSTerminal(formEPOS: any){
    this.humoEPOS.merchantId = formEPOS.merchantId;
    this.humoEPOS.terminalType = formEPOS.terminalType;
    this.humoEPOS.terminalKind = formEPOS.terminalKind;
    this.humoEPOS.pointCodeTerminal = formEPOS.pointCodeTerminal;
    this.humoEPOS.installationDate = formEPOS.installationDate;
    this.humoEPOS.terminalStatus = formEPOS.terminalStatus;
    this.humoEPOS.terminalInventoryNumber = formEPOS.terminalInventoryNumber;
    this.humoEPOS.accountNumber = formEPOS.account;
  }

  addParameters():HumoEposParameter{
    this.hunoEPOSParameters = new HumoEposParameter(
      this.terminalTypes,
      this.terminalKinds,
      this.terminalStatuses
    );
    return this.hunoEPOSParameters;
  }
  editeEPos(id:string){
    this.httpClient.get("url"+id);
  }
}
