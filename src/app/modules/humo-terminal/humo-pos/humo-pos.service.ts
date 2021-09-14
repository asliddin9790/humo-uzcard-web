import { Injectable } from '@angular/core';
import {HumoPosTerminal} from "../../../model/humo-pos-terminal";
import {HumoPosParameter} from "../../../model/humo-pos-parameter";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HumoPosService {

  // @ts-ignore
  private humoPOS: HumoPosTerminal;
  // @ts-ignore
  private humoPosParamteters: HumoPosParameter;

  terminalTypes: any[] =['POS Terminal','POS Terminal-1'];
  terminalKinds: any[] =['Trade Point (POS)', 'Sale Point (POS)'];
  guides: any[] =['Guide 1', 'Guide 2'];
  terminalStatuses: any[] =['Active', 'Disabled'];
  terminalSerialTypes: any[] =['NCR6622','MOV26'];
  terminalModels: any[]= ['Ingenico', 'Ingenico-1'];
  connectionInterfaces: any[]=['Telecom Operator SIM Card', 'Telecom Operator SIM Card-1'];
  hostConnectionMethods: any[]=['SIM Card Beeline', 'SIM Card UzMobile'];
  tmcServerAccounts: any[]= ['ING', 'GNI'];
  configurableHostConnectionMethods: any[]=['TMC Method-1', 'TMC Method-2'];
  terminalBusinessTypes: any[]=['TOBAP-1', 'TOBAP-1'];
  constructor(private httpClient:HttpClient) {
  }

  addPOSTerminal(formPOS: any){
    this.humoPOS.merchantId = formPOS.merchantId;
    this.humoPOS.terminalType = formPOS.terminalType;
    this.humoPOS.terminalKind = formPOS.terminalKind;
    this.humoPOS.guide = formPOS.guide;
    this.humoPOS.pointCodeTerminal = formPOS.pointCodeTerminal;
    this.humoPOS.installationDate = formPOS.installationDate;
    this.humoPOS.terminalStatus = formPOS.terminalStatus;
    this.humoPOS.terminalInventoryNumber = formPOS.numberOfTerminal;
    this.humoPOS.terminalSerialType = formPOS.terminalSerialType;
    this.humoPOS.terminalSerialNumber = formPOS.terminalSerialNumber;
    this.humoPOS.terminalModel = formPOS.terminalModel;
    this.humoPOS.connectionInterface = formPOS.connectionInterface;
    this.humoPOS.hostConnectionMethod = formPOS.hostConnectionMethod;
    this.humoPOS.tmcServerAccount = formPOS.tmcServerAccount;
    this.humoPOS.configurableHostConnectionMethod = formPOS.configurableHostConnectionMethod;
    this.humoPOS.terminalBusinessType = formPOS.terminalBusinessType;
    this.humoPOS.accountNumber = formPOS.account;
  }

  addParameters(): HumoPosParameter{
    this.humoPosParamteters = new HumoPosParameter(
      this.terminalTypes,
      this.terminalKinds,
      this.guides,
      this.terminalStatuses,
      this.terminalSerialTypes,
      this.terminalModels,
      this.connectionInterfaces,
      this.hostConnectionMethods,
      this.tmcServerAccounts,
      this.configurableHostConnectionMethods,
      this.terminalBusinessTypes
    );
    return this.humoPosParamteters;
  }

  editePos(id:string){
   return  this.httpClient.get("url/"+id);
  }
}
