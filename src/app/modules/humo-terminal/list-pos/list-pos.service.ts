import { Injectable } from "@angular/core";
import { TerminalList } from "src/app/model/terminal-list";

@Injectable({
    providedIn: 'root'
  })
  export class ListPOSService {

    terminalList: TerminalList[] = [];

    terminals: TerminalList[] = [{merchantId: 'J09810095338307', installationDate: '25-08-2021', terminalType: 'POS Type 1', terminalKind: 'POS Kind 1'}, 
    {merchantId: 'J09810095338306', installationDate: '25-08-2021', terminalType: 'POS Type 2', terminalKind: 'POS Kind 2'}, 
    {merchantId: 'J09810095338305', installationDate: '25-08-2021', terminalType: 'POS Type 3', terminalKind: 'POS Kind 3'}, 
    {merchantId: 'J09810095338308', installationDate: '25-08-2021', terminalType: 'POS Type 4', terminalKind: 'POS Kind 4'},
    {merchantId: 'J09810095338302', installationDate: '25-08-2021', terminalType: 'POS Type 5', terminalKind: 'POS Kind 5'}, 
    {merchantId: 'J09810095338303', installationDate: '25-08-2021', terminalType: 'POS Type 6', terminalKind: 'POS Kind 6'}, 
    {merchantId: 'J09810095338304', installationDate: '25-08-2021', terminalType: 'POS Type 7', terminalKind: 'POS Kind 7'}, 
    {merchantId: 'J09810095338300', installationDate: '25-08-2021', terminalType: 'POS Type 8', terminalKind: 'POS Kind 8'},
    {merchantId: 'J09810095338301', installationDate: '25-08-2021', terminalType: 'POS Type 9', terminalKind: 'POS Kind 9'}, 
    {merchantId: 'J09810095338315', installationDate: '25-08-2021', terminalType: 'POS Type 10', terminalKind: 'POS Kind 10'}, 
    {merchantId: 'J09810095338318', installationDate: '25-08-2021', terminalType: 'POS Type 11', terminalKind: 'POS Kind 11'},
    {merchantId: 'J09810095338312', installationDate: '25-08-2021', terminalType: 'POS Type 12', terminalKind: 'POS Kind 12'}, 
    {merchantId: 'J09810095338313', installationDate: '25-08-2021', terminalType: 'POS Type 13', terminalKind: 'POS Kind 13'}, 
    {merchantId: 'J09810095338314', installationDate: '25-08-2021', terminalType: 'POS Type 14', terminalKind: 'POS Kind 14'}, 
    {merchantId: 'J09810095338310', installationDate: '25-08-2021', terminalType: 'POS Type 5', terminalKind: 'POS Kind 15'}  ]


    listPOSTerminals(): TerminalList[]{

        for(let i=0; i< this.terminals.length; i++){
            this.terminalList.push(this.terminals[i]);
        }
        return this.terminalList;
    }
  }