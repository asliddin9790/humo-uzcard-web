import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HumoTerminal} from 'src/app/model/humo-terminal';
import {HumoTerminalService} from './humo-terminal.service';
import {NgForm} from '@angular/forms';
import {Table} from 'primeng/table';
import {HumoTerminalMod} from '../../model/humo-terminal-mod';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-humo-terminal',
  templateUrl: './humo-terminal.html',
  styleUrls: ['./humo-terminal.css']
})
export class HumoTerminalComponent implements OnInit {
  @ViewChild('rightContent') block?: ElementRef;
  @Output() atmList = new EventEmitter<string>();
  @Output() posList = new EventEmitter<string>();
  @Output() ePosList = new EventEmitter<string>();
  @Output() contractList = new EventEmitter<string>();

  colorIcon = 'white';
  colorIconMarchandId = 'white';
  page = 1;
  @Input() id: any;
  @Input() maxSize: any;
  // @ts-ignore
  @Output() pageChange: EventEmitter<number>;
  // @ts-ignore
  @Output() pageBoundsCorrection: EventEmitter<number>;
  // @ts-ignore
  humoTerminal: HumoTerminal[];

  humoTerminalMod: any[];
  displayBasic2: boolean;


  constructor(private humoTerminalService: HumoTerminalService) {
  }

  someValueFromChild: any;
  searchBtn = true;
  loading = false;
  status: any[];
  displayBasicUpdateHumoTerminal = false;
  updateTerminal: HumoTerminalMod;


  ngOnInit() {
    this.humoTerminal = this.humoTerminalService.merchants;
    this.humoTerminalMod = this.humoTerminalService.humoTerminalMod;
    console.log('mod ter: ' + this.humoTerminalMod);
    console.log(' ter: ' + this.humoTerminal);
    this.status = this.humoTerminalService.status;

  }


  delete() {
    alert('Are you Deleted ?');
  }

  iconClicedSort() {
    // tslint:disable-next-line:triple-equals
    if (this.colorIcon === 'white') {
      this.colorIcon = '#083058';
    } else {
      this.colorIcon = 'white';
    }
  }

  iconClicedSortMarchandId() {
    if (this.colorIconMarchandId === 'white') {
      this.colorIconMarchandId = '#083058';
    } else {
      this.colorIconMarchandId = 'white';
    }

  }


  listAtm(atmList: string) {
    const str = localStorage.getItem('atmForm');
    console.log(str);
    this.displayBlock(atmList);
  }

  listPost(posList: string) {
    this.displayBlock(posList);
  }

  listEpos(ePosList: string) {
    this.displayBlock(ePosList);
  }

  listContract(contractList: string) {
    this.displayBlock(contractList);
  }


  openAtmFormTerminal(atmForm: string) {

    this.displayBlock(atmForm);
  }

  openPosFormTerminal(posForm: string) {
    this.displayBlock(posForm);
  }

  openEposFormTerminal(eposForm: string) {
    this.displayBlock(eposForm);
  }

  openContractFormTerminal(contractForm: string) {
    this.displayBlock(contractForm);
  }


  displayBlock($event: string | null) {

    const rightContent = document.getElementById('rightContent');
    switch ($event) {
      case 'atmList':
        if (rightContent) {
          rightContent.innerHTML = '<app-list-atm></app-list-atm>';
        }
        break;

      case 'posList':
        if (rightContent) {
          rightContent.innerHTML = '<app-list-pos></app-list-pos>';
        }
        break;

      case 'ePosList':
        if (rightContent) {
          rightContent.innerHTML = '<app-list-epos></app-list-epos>';
        }
        break;

      case 'contractList':
        if (rightContent) {
          rightContent.innerHTML = '<app-list-contract></app-list-contract>';
        }
        break;

      case 'atmForm':

        if (rightContent) {
          rightContent.innerHTML = '<app-humo-atm></app-humo-atm>';
        }
        break;

      case 'posForm':
        if (rightContent) {
          rightContent.innerHTML = '<app-humo-pos></app-humo-pos>';
        }
        break;

      case 'eposForm':
        if (rightContent) {
          rightContent.innerHTML = '<app-humo-epos></app-humo-epos>';
        }
        break;

      case 'contractForm':
        if (rightContent) {
          rightContent.innerHTML = '<app-humo-contract></app-humo-contract>';
        }
        break;

    }

  }

  onSearchBtn() {
    this.searchBtn = !this.searchBtn;
  }

  onSearch(searchForm: NgForm) {
    console.log(searchForm.value);
    const result: any[] = [];
    for (const r of this.humoTerminal) {
      if (r.ABRV_NAME.toLowerCase().indexOf(searchForm.value.merchantId) !== -1 /*||
        r..toLowerCase().indexOf(searchForm.value.status) !== -1*/) {
        result.push(r);
      }
      this.humoTerminal = result;
    }
  }

  clear(dt1: Table) {
    dt1.clear();
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  onSubmit(form: NgForm) {
    this.displayBasic2 = false;
    console.log(form.value);
  }


  onCancel(form: NgForm) {
    this.displayBasic2 = false;
    form.reset();
  }

  openUpdate(customer: any) {

    console.log('Customer open.: ' + customer);
  }

  onDeleteMerchant(customer: any) {
    this.humoTerminalService.deleteContract(customer);
  }

  onSubmitHumoUpdate(updateHumoTerminal: NgForm) {
    this.humoTerminalService.updateHumoTerminal(updateHumoTerminal);
    this.displayBasicUpdateHumoTerminal = true;
  }

  onDeleteTerminal(customer: any) {
    this.humoTerminalService.deleteContract(customer);
    Swal.fire('Deleted!', 'Humo Terminal deleted, ' + customer.merchantId, 'success');
  }
}
