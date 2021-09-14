import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HumoTerminalComponent} from "../humo-terminal.component";
import {HumoEposService} from "../humo-epos/humo-epos.service";
import { ListEPOSService } from './list-epose.service';
import { TerminalList } from 'src/app/model/terminal-list';

@Component({
  selector: 'app-list-epos',
  templateUrl: './list-epos.component.html',
  styleUrls: ['./list-epos.component.css']
})
export class ListEposComponent implements OnInit {

  @Output() closeEposlist: EventEmitter<boolean> =new EventEmitter<boolean>();
  // @ts-ignore
  terminalList: TerminalList[];
  page= 1;
  
  constructor(private service: HumoEposService, private listEPOSServics: ListEPOSService) { }

  ngOnInit() {
    this.terminalList = this.listEPOSServics.listEPOSerminals();
  }

  // @ts-ignore

  @Input() showAtmForm= new HumoTerminalComponent();
  openEPostForm(epostForm: string) {
    localStorage.setItem('creat','Create')
    localStorage.removeItem('edit')
    this.showAtmForm.openEposFormTerminal(epostForm);
  }
  editEpos(id:string) {
    this.service.editeEPos(id)
    localStorage.setItem('edit','Edit');
    localStorage.removeItem('creat')
    this.showAtmForm.openContractFormTerminal('eposForm')
  }

}
