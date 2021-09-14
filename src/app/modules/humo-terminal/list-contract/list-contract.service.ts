import { Injectable } from "@angular/core";
import { ContractList } from "src/app/model/contract-list";


@Injectable({
    providedIn: 'root'
  })
  export class ListContractService {

    contractList: ContractList[] = [];

    contracts: ContractList[] = [{merchantId: 'J09810095338307', contractNumber: '1', contractDate: '01-08-2021', accountNumber: '23504000200950907200'}, 
    {merchantId: 'J09810095338306', contractNumber: '2', contractDate: '02-08-2021', accountNumber: '23504000200950907201'}, 
    {merchantId: 'J09810095338305', contractNumber: '3', contractDate: '03-08-2021', accountNumber: '23504000200950907202'}, 
    {merchantId: 'J09810095338308', contractNumber: '4', contractDate: '04-08-2021', accountNumber: '23504000200950907203'},
    {merchantId: 'J09810095338302', contractNumber: '5', contractDate: '05-08-2021', accountNumber: '23504000200950907204'}, 
    {merchantId: 'J09810095338303', contractNumber: '6', contractDate: '06-08-2021', accountNumber: '23504000200950907205'}, 
    {merchantId: 'J09810095338304', contractNumber: '7', contractDate: '07-08-2021', accountNumber: '23504000200950907206'}, 
    {merchantId: 'J09810095338300', contractNumber: '8', contractDate: '08-08-2021', accountNumber: '23504000200950907207'},
    {merchantId: 'J09810095338301', contractNumber: '9', contractDate: '09-08-2021', accountNumber: '23504000200950907208'}, 
    {merchantId: 'J09810095338315', contractNumber: '10', contractDate: '10-08-2021', accountNumber: '23504000200950907209'}, 
    {merchantId: 'J09810095338318', contractNumber: '11', contractDate: '11-08-2021', accountNumber: '23504000200950907210'},
    {merchantId: 'J09810095338312', contractNumber: '12', contractDate: '12-08-2021', accountNumber: '23504000200950907211'}, 
    {merchantId: 'J09810095338313', contractNumber: '13', contractDate: '13-08-2021', accountNumber: '23504000200950907212'}, 
    {merchantId: 'J09810095338314', contractNumber: '14', contractDate: '14-08-2021', accountNumber: '23504000200950907213'}, 
    {merchantId: 'J09810095338310', contractNumber: '15', contractDate: '01-08-2021', accountNumber: '23504000200950907214'}  ]


    listContracts(): ContractList[]{

        for(let i=0; i< this.contracts.length; i++){
            this.contractList.push(this.contracts[i]);
        }
        return this.contractList;
    }
  }