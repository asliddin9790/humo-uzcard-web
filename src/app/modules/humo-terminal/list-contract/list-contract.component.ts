import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HumoTerminalComponent} from "../humo-terminal.component";
import {HumoTerminalContractService} from "../humo-contract/humo-terminal-contract.service";
import { ListContractService } from './list-contract.service';
import { ContractList } from 'src/app/model/contract-list';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  @Output() closeContractList: EventEmitter<boolean> =new EventEmitter<boolean>();

  // @ts-ignore
  contractList: ContractList[];
  create=''
  page1= 1;
  
  constructor(private service:HumoTerminalContractService, private listContractService: ListContractService) { }

  ngOnInit() {
    this.contractList = this.listContractService.listContracts();
  }

// @ts-ignore
  @Input() showAtmForm= new HumoTerminalComponent();
  openContractForm(contractForm: string,create:string) {
    localStorage.setItem('creat',create)
    localStorage.removeItem('edit')
    this.showAtmForm.openContractFormTerminal(contractForm);
  }

  editContract(id:string) {
    this.service.editContract(id)
    localStorage.setItem('edit','Edit');
    localStorage.removeItem('creat')
    this.showAtmForm.openContractFormTerminal('contractForm')
  }
}
