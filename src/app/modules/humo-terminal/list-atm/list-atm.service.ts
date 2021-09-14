import { Injectable } from "@angular/core";
import { TerminalList } from "src/app/model/terminal-list";

@Injectable({
    providedIn: 'root'
  })
  export class ListATMService {

    terminalList: TerminalList[] = [];

    terminals: TerminalList[] = [{merchantId: 'J09810095338307', installationDate: '25-08-2021', terminalType: 'Type 1', terminalKind: 'Kind 1'}, 
    {merchantId: 'J09810095338306', installationDate: '25-08-2021', terminalType: 'Type 2', terminalKind: 'Kind 2'}, 
    {merchantId: 'J09810095338305', installationDate: '25-08-2021', terminalType: 'Type 3', terminalKind: 'Kind 3'}, 
    {merchantId: 'J09810095338308', installationDate: '25-08-2021', terminalType: 'Type 4', terminalKind: 'Kind 4'},
    {merchantId: 'J09810095338302', installationDate: '25-08-2021', terminalType: 'Type 5', terminalKind: 'Kind 5'}, 
    {merchantId: 'J09810095338303', installationDate: '25-08-2021', terminalType: 'Type 6', terminalKind: 'Kind 6'}, 
    {merchantId: 'J09810095338304', installationDate: '25-08-2021', terminalType: 'Type 7', terminalKind: 'Kind 7'}, 
    {merchantId: 'J09810095338300', installationDate: '25-08-2021', terminalType: 'Type 8', terminalKind: 'Kind 8'},
    {merchantId: 'J09810095338301', installationDate: '25-08-2021', terminalType: 'Type 9', terminalKind: 'Kind 9'}, 
    {merchantId: 'J09810095338315', installationDate: '25-08-2021', terminalType: 'Type 10', terminalKind: 'Kind 10'}, 
    {merchantId: 'J09810095338318', installationDate: '25-08-2021', terminalType: 'Type 11', terminalKind: 'Kind 11'},
    {merchantId: 'J09810095338312', installationDate: '25-08-2021', terminalType: 'Type 12', terminalKind: 'Kind 12'}, 
    {merchantId: 'J09810095338313', installationDate: '25-08-2021', terminalType: 'Type 13', terminalKind: 'Kind 13'}, 
    {merchantId: 'J09810095338314', installationDate: '25-08-2021', terminalType: 'Type 14', terminalKind: 'Kind 14'}, 
    {merchantId: 'J09810095338310', installationDate: '25-08-2021', terminalType: 'Type 5', terminalKind: 'Kind 15'}  ]


    listATMTerminals(): TerminalList[]{

        for(let i=0; i< this.terminals.length; i++){
            this.terminalList.push(this.terminals[i]);
        }
        return this.terminalList;
    }
  }