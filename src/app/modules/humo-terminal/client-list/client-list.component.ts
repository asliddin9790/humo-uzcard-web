import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Table} from 'primeng/table';
import {ClientList} from '../../../model/client-list';
import {HumoTerminalService} from '../services/humo-terminal.service';
import {ReportsService} from '../services/reports.service';


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

  constructor(private service: HumoTerminalService, private reportService: ReportsService) {
  }

  ngOnInit(): void {
    /* this.service.getClientList().subscribe(
       data => {
         this.clientList = data;
         console.log('Client Data: ' + data);
       }
     );*/
    /* this.service.getClientList().then((data) => {
       this.clientList = data;
       console.log('Client list.: ' + this.clientList);
     });*/
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
    this.service.addMerchant(form.value);
    this.openAddMerchant = false;
   /* this.roter.navigate(['/humo/merchant']);*/
  }

  onCancel(form: NgForm) {
    this.openAddMerchant = false;
  }

  showBasicDialogAddmerchant(customer: any) {
    this.openAddMerchant = true;
    this.customer = customer;
    console.log('customer.value).: ' + this.customer);
  }

  reportExcel(customer: ClientList[]) {
    this.reportService.reportExcel(customer);
  }

}
