import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {HumoTerminalComponent} from "../humo-terminal.component";
import {HumoTerminalAtmService} from "../humo-atm/humo-terminal-atm.service";
import {ListATMService} from './list-atm.service';
import {TerminalList} from 'src/app/model/terminal-list';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-list-atm',
  templateUrl: './list-atm.component.html',
  styleUrls: ['./list-atm.component.css']
})
export class ListAtmComponent implements OnInit {

  // @ts-ignore
  terminalList: TerminalList[];
  // @ts-ignore
  @Input() showAtmForm = new HumoTerminalComponent();

  page = 1;

  constructor(private service: HumoTerminalAtmService, private listAtmService: ListATMService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.terminalList = this.listAtmService.listATMTerminals();
  }

  openAtmForm(atmForm: string) {
    localStorage.setItem('atmcreat', 'Creat')
    localStorage.removeItem('atmedit')
    this.showAtmForm.openAtmFormTerminal(atmForm);
  }

  editAtm(id: any) {
    console.log(id)
    this.service.editeatm(id);
    localStorage.setItem('atmedit', 'Edit');
    localStorage.removeItem('atmcreat')
    this.showAtmForm.openContractFormTerminal('atmForm')
  }


  // TOOLTIP


  onConfirm() {
    this.messageService.clear('c');
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Are you sure?',
      detail: 'Confirm to proceed'
    });
  }


  onReject() {
    this.messageService.clear('c');
  }
}
