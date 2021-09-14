import { Injectable } from "@angular/core";
import { TerminalList } from "src/app/model/terminal-list";

@Injectable({
    providedIn: 'root'
  })
  export class ListEPOSService {

    terminalList: TerminalList[] = [];

    terminals: TerminalList[] = [{merchantId: 'J09810095338307', installationDate: '25-08-2021', terminalType: 'EPOS Type 1', terminalKind: 'EPOS Kind 1'}, 
    {merchantId: 'J09810095338306', installationDate: '25-08-2021', terminalType: 'EPOS Type 2', terminalKind: 'EPOS Kind 2'}, 
    {merchantId: 'J09810095338305', installationDate: '25-08-2021', terminalType: 'EPOS Type 3', terminalKind: 'EPOS Kind 3'}, 
    {merchantId: 'J09810095338308', installationDate: '25-08-2021', terminalType: 'EPOS Type 4', terminalKind: 'EPOS Kind 4'},
    {merchantId: 'J09810095338302', installationDate: '25-08-2021', terminalType: 'EPOS Type 5', terminalKind: 'EPOS Kind 5'}, 
    {merchantId: 'J09810095338303', installationDate: '25-08-2021', terminalType: 'EPOS Type 6', terminalKind: 'EPOS Kind 6'}, 
    {merchantId: 'J09810095338304', installationDate: '25-08-2021', terminalType: 'EPOS Type 7', terminalKind: 'EPOS Kind 7'}, 
    {merchantId: 'J09810095338300', installationDate: '25-08-2021', terminalType: 'EPOS Type 8', terminalKind: 'EPOS Kind 8'},
    {merchantId: 'J09810095338301', installationDate: '25-08-2021', terminalType: 'EPOS Type 9', terminalKind: 'EPOS Kind 9'}, 
    {merchantId: 'J09810095338315', installationDate: '25-08-2021', terminalType: 'EPOS Type 10', terminalKind: 'EPOS Kind 10'}, 
    {merchantId: 'J09810095338318', installationDate: '25-08-2021', terminalType: 'EPOS Type 11', terminalKind: 'EPOS Kind 11'},
    {merchantId: 'J09810095338312', installationDate: '25-08-2021', terminalType: 'EPOS Type 12', terminalKind: 'EPOS Kind 12'}, 
    {merchantId: 'J09810095338313', installationDate: '25-08-2021', terminalType: 'EPOS Type 13', terminalKind: 'EPOS Kind 13'}, 
    {merchantId: 'J09810095338314', installationDate: '25-08-2021', terminalType: 'EPOS Type 14', terminalKind: 'EPOS Kind 14'}, 
    {merchantId: 'J09810095338310', installationDate: '25-08-2021', terminalType: 'EPOS Type 5', terminalKind: 'EPOS Kind 15'}  ]


    listEPOSerminals(): TerminalList[]{

        for(let i=0; i< this.terminals.length; i++){
            this.terminalList.push(this.terminals[i]);
        }
        return this.terminalList;
    }
  }