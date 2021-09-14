import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HumoTerminalComponent} from "../humo-terminal.component";
import {HumoPosService} from "../humo-pos/humo-pos.service";
import { TerminalList } from 'src/app/model/terminal-list';
import { ListEPOSService } from '../list-epos/list-epose.service';

@Component({
  selector: 'app-list-pos',
  templateUrl: './list-pos.component.html',
  styleUrls: ['./list-pos.component.css']
})
export class ListPosComponent implements OnInit {
  @Output() closePoslist: EventEmitter<boolean> =new EventEmitter<boolean>();
  page= 1;
  // @ts-ignore
  terminalList: TerminalList[];
  // @ts-ignore
  @Input() showAtmForm= new HumoTerminalComponent();

  constructor(private service:HumoPosService, private listPOSService: ListEPOSService) { }

  ngOnInit() {
    this.terminalList = this.listPOSService.listEPOSerminals();
  }

  openPostForm(posForm: string) {
    localStorage.setItem('creat','Create')
    localStorage.removeItem('edit')
    this.showAtmForm.openPosFormTerminal(posForm);
  }
  editPos(id:string) {
    this.service.editePos(id);
    localStorage.setItem('edit','Edit');
    localStorage.removeItem('creat')
    this.showAtmForm.openContractFormTerminal('posForm')
  }
}
