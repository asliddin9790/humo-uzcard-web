import {Component, OnInit} from '@angular/core';
import {HumoTerminal} from '../../../model/humo-terminal';
import {HumoTerminalService} from '../humo-terminal.service';
import {NgForm} from '@angular/forms';
import {Table} from 'primeng/table';
import {MenuItem, MessageService} from 'primeng/api';
import {EditContract} from '../../../model/edit-contract';
import Swal from 'sweetalert2';
import {ReportsService} from '../reports.service';

@Component({
  selector: 'app-humo-contacts',
  templateUrl: './humo-contacts.component.html',
  styleUrls: ['./humo-contacts.component.scss']
})
export class HumoContactsComponent implements OnInit {
  loading = false;
  displayBasic2: boolean;
  searchBtn = true;
  humoContract: HumoTerminal[];
  contractTpye: any[];
  contractStatus: any[];

  items: MenuItem[];
  editContract: EditContract;
  displayBasicUpdate: boolean;
  showAddButton = true;


  constructor(private humoTerminalService: HumoTerminalService,
              private messageService: MessageService,
              private reportService: ReportsService) {
  }

  ngOnInit(): void {
    this.humoContract = this.humoTerminalService.merchants;
    /*   this.humoTerminalService.getHumoTerminalList().subscribe(
         (data: HumoTerminal[]) => {
           this.humoContract = data;
           console.log('concat ' + this.humoContract);
         }
       );*/

    this.contractTpye = this.humoTerminalService.contractType;
    this.contractStatus = this.humoTerminalService.contractStatus;
    this.items = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }
      },
    ];
  }

  onSearch(searchForm: NgForm) {
    console.log(searchForm.value);
    const result: any[] = [];
    for (const r of this.humoContract) {
      if (r.ABRV_NAME.toLowerCase().indexOf(searchForm.value.merchantId) !== -1 /*||
        r..toLowerCase().indexOf(searchForm.value.status) !== -1*/) {
        result.push(r);
      }
      this.humoContract = result;
    }
  }

  save(severity: string) {
    this.messageService.add({severity, summary: 'Success', detail: 'Data Saved'});
  }

  update() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'});
  }

  delete() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Deleted'});
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
    this.humoContract.push(form.value);
    this.displayBasic2 = false;
  }

  onCancel(form: NgForm) {
    this.displayBasic2 = false;
    form.reset();
  }


  onEdited(customer: HumoTerminal) {
    this.editContract = customer;
    this.displayBasicUpdate = true;
    console.log('Edit conract: ', this.editContract);
  }

  onDeletedContract(customer: any) {
    Swal.fire('Deleted!', 'User deleted, ' + customer.FULL_NAME, 'success');
    this.humoTerminalService.deleteContract(customer);
  }

  onCancelEdit() {
    this.displayBasicUpdate = false;
  }

  onSubmitUpdate(updateForm: NgForm) {
    console.log('Edit contract info : ', updateForm.value);
    this.humoTerminalService.updateContract(updateForm);
    this.displayBasicUpdate = false;
    Swal.fire('Updated!', 'Edited Succussefuly', 'success');
  }


  reportExcel(customer: any) {
    this.reportService.reportExcel(customer);
  }
}
