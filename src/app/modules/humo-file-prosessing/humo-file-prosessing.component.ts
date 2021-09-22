import {Component, OnInit} from '@angular/core';
import {UzcardTerminal} from '../../model/uzcard-terminal';
import {NgForm} from '@angular/forms';
import {PrimeNGConfig} from 'primeng/api';
import {UzcardTerminalService} from '../uzcard-terminal/uzcard-terminal.service';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-humo-file-prosessing',
  templateUrl: './humo-file-prosessing.component.html',
  styleUrls: ['./humo-file-prosessing.component.scss']
})
export class HumoFileProsessingComponent implements OnInit {

  displayBasic2 = false;
  loading: false;
  uzcardTerminal: UzcardTerminal[];
  searchBtn = true;

  constructor(private primengConfig: PrimeNGConfig, private uzcardService: UzcardTerminalService) {
  }

  ngOnInit(): void {
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
  }



  onSearchBtn() {
    this.searchBtn = !this.searchBtn;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.uzcardTerminal.push(form.value);
    console.log('Uzcard terminal: ', this.uzcardTerminal);
    this.displayBasic2 = false;
    form.reset();
  }

  clear(table: Table) {
    table.clear();
  }

}
