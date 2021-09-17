import {Component, OnInit} from '@angular/core';
import {HumoTerminalService} from '../humo-terminal.service';
import {NgForm} from '@angular/forms';
import {Table} from 'primeng/table';
import {HumoTerminal} from '../../../model/humo-terminal';
import {EditMerchant} from '../../../model/edit-merchant';
import Swal from 'sweetalert2';
import {ReportsService} from "../reports.service";

@Component({
  selector: 'app-humo-merchant',
  templateUrl: './humo-merchant.component.html',
  styleUrls: ['./humo-merchant.component.css']
})
export class HumoMerchantComponent implements OnInit {

  loading = false;
  displayBasic2: boolean;
  searchBtn = true;
  humoMerchant: HumoTerminal[];
  status: any[];
  mcc: any[];
  displayBasicUpdate = false;
  updateMerchent: EditMerchant;
  // @ts-ignore
  mccResult: Array = [];
  employee: any;

  constructor(private humoTerminalService: HumoTerminalService, private reportService: ReportsService) {
  }

  ngOnInit(): void {
    this.humoMerchant = this.humoTerminalService.merchants;
    this.status = this.humoTerminalService.status;
    this.mcc = this.humoTerminalService.companyMCC;
    console.log('this.mcc ' + this.mcc);
  }

  onSearch(searchForm: NgForm) {

    const result: any[] = [];
    for (const r of this.humoMerchant) {
      if (r.ABRV_NAME.toLowerCase().indexOf(searchForm.value.merchantId) !== -1 /*||
        r..toLowerCase().indexOf(searchForm.value.status) !== -1*/) {
        result.push(r);
      }
      this.humoMerchant = result;
    }
  }

  onSearchBtn() {
    this.searchBtn = !this.searchBtn;
  }


  clear(dt1: Table) {
    dt1.clear();
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  onSubmit(form: NgForm) {
    this.humoMerchant.push(form.value);
    console.log('this.humoMerchant :  ' + this.humoMerchant);
    this.displayBasic2 = false;
  }

  onCancel() {
    this.displayBasicUpdate = false;
  }

  openUpdate(customer: any) {
    this.displayBasicUpdate = true;
    this.updateMerchent = customer;
    console.log('update merchent11: ' + this.updateMerchent);
    this.humoTerminalService.updateMerchant(customer);
    Swal.fire('Update!', 'User updated Merchant, ' + customer.FULL_NAME, 'success');

    console.log('update merchent22: ' + this.updateMerchent);
  }

  onDeleteMerchant(customer: any) {
    Swal.fire('Deleted!', 'User deleted Merchant, ' + customer.FULL_NAME, 'success');
    this.humoTerminalService.deleteContract(customer);
  }

  onSubmitUdateMerchant(updateMerchant: NgForm) {
    this.humoTerminalService.updateMerchant(updateMerchant);
    Swal.fire('Updated!', ' Merchant updated, ' + updateMerchant.value.FULL_NAME, 'success');
    this.displayBasicUpdate = false;
  }

  onEditCancel() {
    this.displayBasic2 = false;
  }

  searchEmps(event): void {
    this.mccResult = this.mcc.filter(m => m.mcc.startWith(event.query));
    console.log('event.query ' + event.query);
  }

  reportExcel(humoMerchant: HumoTerminal[]) {
    this.reportService.reportExcel(humoMerchant);
  }
}

