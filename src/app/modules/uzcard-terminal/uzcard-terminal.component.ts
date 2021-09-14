import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {NgForm} from '@angular/forms';
import {UzcardTerminal} from '../../model/uzcard-terminal';
import {UzcardTerminalService} from './uzcard-terminal.service';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-uzcard-terminal',
  templateUrl: './uzcard-terminal.component.html',
  styleUrls: ['./uzcard-terminal.component.css']
})
export class UzcardTerminalComponent implements OnInit {

  // @ts-ignore
  displayBasic2: boolean;
  btrt2 = [];
  /*  btrt = [
      {
        code: '0000121',
        naim: 'Toshkent',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000122',
        naim: 'Toshkent1',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000123',
        naim: 'Toshkent2',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000124',
        naim: 'Toshkent3',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000125',
        naim: 'Toshkent4',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000126',
        naim: 'Toshkent5',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000127',
        naim: 'Toshkent6',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000128',
        naim: 'Toshkent7',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
      {
        code: '0000129',
        naim: 'Toshkent8',
        cod_category: '6070',
        naim_category: 'ATM i kioskiy',
        sostayena: 'edited',
        zayavka: '998970079790',
        app_id: '555'
      },
    ];*/
  searchBtn = true;
  uzcardTerminal: UzcardTerminal[];
  page = 1;
  loading = false;
  representatives: UzcardTerminal[];
  activityValues: number[] = [0, 100];


  statuses = [
    {label: 'edited', value: 'Edited'},

  ];

  constructor(private router: Router, private primengConfig: PrimeNGConfig, private uzcardService: UzcardTerminalService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.uzcardTerminal = this.uzcardService.btrt;
  }

  cancel() {
    this.router.navigate(['humo']);
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  onSearch(searchForm: NgForm) {
    console.log(searchForm.value);
    const result: any[] = [];
    for (const res of this.uzcardTerminal) {
      if (searchForm.value.code !== null && res.clientId.toLowerCase().indexOf(searchForm.value.code) !== -1) {
        result.push(res);
      }
      this.uzcardTerminal = result;
    }
    /* if (result.length === 0 || !searchForm.value.code){
     }*/
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    this.uzcardTerminal.push(form.value);
    console.log('Uzcard terminal: ', this.uzcardTerminal);
    this.displayBasic2 = false;
    form.reset();
  }


  onSearchBtn() {
    this.searchBtn = !this.searchBtn;
  }

  clear(table: Table) {
    table.clear();
  }
}
