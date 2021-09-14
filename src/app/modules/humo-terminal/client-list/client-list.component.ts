import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Table} from 'primeng/table';
import {ClientList} from '../../../model/client-list';
import {HumoTerminalService} from '../humo-terminal.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {


  searchBtn = true;
  loading: true;
  clientList: ClientList[];
  reportClient: ClientList[] = [];
  openAddMerchant = false;
  displayAddClient = false;
  customer: ClientList;

  constructor(private service: HumoTerminalService) {
  }

  ngOnInit(): void {
    this.clientList = this.service.clients;
  }

  onSearchBtn() {
    this.searchBtn = !this.searchBtn;
  }

  onSearch(searchForm: NgForm) {

    console.log(searchForm.value);
    const result: any[] = [];
    for (const client of this.clientList) {
      if (client.clientId.toLowerCase().indexOf(searchForm.value.clientId) !== -1 ||
        client.clientName.toLowerCase().indexOf(searchForm.value.clientName) !== -1) {
        result.push(client);
      }
      this.clientList = result;
      console.log('find: ' + this.clientList);
    }
  }

  clear(dt1: Table) {
    dt1.clear();
  }

  showBasicDialog() {
    this.displayAddClient = !this.displayAddClient;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.openAddMerchant = false;
  }


  onCancel(form: NgForm) {
    this.openAddMerchant = false;
  }

  showBasicDialogAddmerchant(customer: any) {
    this.openAddMerchant = true;
    this.customer = customer;
    console.log('customer.value).: ' + this.customer);
  }

  reportExcel(customer: ClientList) {
    this.reportClient.push(customer);
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.reportClient); // Sale Data
      const workbook = {Sheets: {data: worksheet}, SheetNames: ['data']};
      const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
      this.saveAsExcelFile(excelBuffer, 'report');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
    this.reportClearList(this.reportClient[0]);
  }

  reportClearList(customer: ClientList) {
    const index: number = this.reportClient.indexOf(customer);
    if (index !== -1) {
      this.reportClient.splice(index, 1);
    }
  }
}
