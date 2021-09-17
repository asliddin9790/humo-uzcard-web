import {Injectable} from '@angular/core';
import {HumoTerminal} from 'src/app/model/humo-terminal';
import {NgForm} from '@angular/forms';
import {HumoTerminalMod} from '../../model/humo-terminal-mod';
import {HttpClient} from '@angular/common/http';
import {ClientList} from '../../model/client-list';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumoTerminalService {


  private Url = 'http://localhost:8080/api/humo-terminal';

  constructor(private http: HttpClient) {
  }


  status = [
    {status: 'Blocked'},
    {status: '78787'},
    {status: '9999'},
    {status: '781010989'},
    {status: '5555'}
  ];

  contractType = [
    {contract: 'Online'},
    {contract: 'Offline'}
  ];

  contractStatus = [
    {status: 'Blocked'},
    {status: 'Active'},
  ];

  companyMCC = [
    {mcc: '121324'},
    {mcc: '88989'},
    {mcc: '02031'},
    {mcc: '69845'}
  ];

  humoTerminalStatus = [
    {status: 'Actived'},
    {status: 'Blocked'}
  ];

  humoTerminalType = [
    {type: 'POST'},
    {type: 'Get'}
  ];

  humoTerminalMod: HumoTerminalMod[] = [
    {
      MERCHANT: '123',
      terminalId: '001',
      terminalType1: 'POST',
      terminalKind: 'kind',
      guide: 'Guid 12',
      pointCodeTerminal: ' point 89',
      installationDate: '12.11.2020',
      terminalStatus: 'Actived',
      terminalInventoryNumber: 'th567462',
      terminalSerialType: 'AA',
      terminalSerialNumber: '8897',
      interfaceConnection: 'contection',
      connectionHost: 'host 12',
      accountTMC: 'account Tmc',
      configTMC: ' config tmc',
      terminalType2: 'type2',
      accountTransitory: 'account transitory'
    },
    {
      MERCHANT: '444',
      terminalId: '002',
      terminalType1: 'GET',
      terminalKind: 'kind',
      guide: 'Guid 12',
      pointCodeTerminal: ' point 89',
      installationDate: '12.11.2020',
      terminalStatus: 'Actived',
      terminalInventoryNumber: 'th567462',
      terminalSerialType: 'AA',
      terminalSerialNumber: '8897',
      interfaceConnection: 'contection',
      connectionHost: 'host 12',
      accountTMC: 'account Tmc',
      configTMC: ' config tmc',
      terminalType2: 'type2',
      accountTransitory: 'account transitory'
    },
    {
      MERCHANT: '555',
      terminalId: '003',
      terminalType1: 'POST',
      terminalKind: 'kind',
      guide: 'Guid 12',
      pointCodeTerminal: ' point 89',
      installationDate: '12.11.2020',
      terminalStatus: 'Actived',
      terminalInventoryNumber: 'th567462',
      terminalSerialType: 'AA',
      terminalSerialNumber: '8897',
      interfaceConnection: 'contection',
      connectionHost: 'host 12',
      accountTMC: 'account Tmc',
      configTMC: ' config tmc',
      terminalType2: 'type2',
      accountTransitory: 'account transitory'
    },
    {
      MERCHANT: '111',
      terminalId: '004',
      terminalType1: 'POST',
      terminalKind: 'kind',
      guide: 'Guid 12',
      pointCodeTerminal: ' point 89',
      installationDate: '12.11.2020',
      terminalStatus: 'Actived',
      terminalInventoryNumber: 'th567462',
      terminalSerialType: 'AA',
      terminalSerialNumber: '8897',
      interfaceConnection: 'contection',
      connectionHost: 'host 12',
      accountTMC: 'account Tmc',
      configTMC: ' config tmc',
      terminalType2: 'type2',
      accountTransitory: 'account transitory'
    }
  ];

  humoTerminal: HumoTerminal[] = [];

  merchants: HumoTerminal[] = [
    {
      MERCHANT: '123',
      ABRV_NAME: 'asliddin',
      FAX: 'uz-card',
      FULL_NAME: '9790',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    },
    {
      MERCHANT: '321',
      ABRV_NAME: 'asliddin',
      FAX: 'humo',
      FULL_NAME: '555',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    },
    {
      MERCHANT: '31',
      ABRV_NAME: 'asliddin',
      FAX: 'humo',
      FULL_NAME: '555',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    },
    {
      MERCHANT: '55',
      ABRV_NAME: 'asliddin',
      FAX: 'humo',
      FULL_NAME: '555',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    },
    {
      MERCHANT: '50',
      ABRV_NAME: 'asliddin',
      FAX: 'humo',
      FULL_NAME: '555',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    },
    {
      MERCHANT: '100',
      ABRV_NAME: 'asliddin',
      FAX: 'humo',
      FULL_NAME: '555',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    },
    {
      MERCHANT: '21',
      ABRV_NAME: 'asliddin',
      FAX: 'humo',
      FULL_NAME: '555',
      CNTRY: 'Davr',
      CITY: '98100',
      REG_NR: '12345',
      STREET: '78hs',
      POST_IND: '65656',
      PHONE: 'post free',
      CONT_PERSON: 'pos min',
      MCC: '7777',
      P_CNTRY: '666',
      P_CITY: 'atmfree',
      P_STREET: 'atmmin',
      P_POST_IND: 'poslimit',
      MRC_PHONE: 'poslimitact',
      REPORT_CRIT: 'imprintlimit',
      E_MAIL: 'status',
      ADD_INFO: '555',
      REPORT_CRIT2: 'agrdate',
      USER_FIELD: 'algorithm'
    }
  ];

  clients: ClientList[] = [
       {
         clientId: '1',
         clientName: 'James',
         clientStatus: 'Actived',
         FAX: 'fax-l',
         FULL_NAME: 'James Bond',
         CNTRY: 'Uzcc',
         CITY: 'Tashkent',
         REG_NR: 'reg nr',
         STREET: 'STREET',
         POST_IND: 'POST_IND',
         PHONE: '+998 97 001 01 01',
         CONT_PERSON: 'CONT_PERSON',
         MCC: 'MCC',
         P_CNTRY: 'P_CNTRY',
         P_CITY: 'P_CITY',
         P_STREET: 'P_STREET',
         P_POST_IND: 'P_POST_IND',
         MRC_PHONE: 'MRC_PHONE',
         REPORT_CRIT: 'REPORT_CRIT',
         E_MAIL: 'E_MAIL',
         ADD_INFO: 'ADD_INFO',
         REPORT_CRIT2: 'r6',
         USER_FIELD: 'f6'
       },
       {
         clientId: '2',
         clientName: 'John',
         clientStatus: 'Blocked',
         FAX: 'fax-l',
         FULL_NAME: 'John Week',
         CNTRY: 'Uzcc',
         CITY: 'Tashkent',
         REG_NR: 'reg nr',
         STREET: 'STREET',
         POST_IND: 'POST_IND',
         PHONE: '+998 97 001 01 01',
         CONT_PERSON: 'CONT_PERSON',
         MCC: 'MCC',
         P_CNTRY: 'P_CNTRY',
         P_CITY: 'P_CITY',
         P_STREET: 'P_STREET',
         P_POST_IND: 'P_POST_IND',
         MRC_PHONE: 'MRC_PHONE',
         REPORT_CRIT: 'REPORT_CRIT',
         E_MAIL: 'E_MAIL',
         ADD_INFO: 'ADD_INFO',
         REPORT_CRIT2: 'r5',
         USER_FIELD: 'f5'
       },
       {
         clientId: '3',
         clientName: 'Killy',
         clientStatus: 'Blocked',
         FAX: 'fax-l',
         FULL_NAME: 'Killy Week',
         CNTRY: 'Uzcc',
         CITY: 'Tashkent',
         REG_NR: 'reg nr',
         STREET: 'STREET',
         POST_IND: 'POST_IND',
         PHONE: '+998 97 001 01 01',
         CONT_PERSON: 'CONT_PERSON',
         MCC: 'MCC',
         P_CNTRY: 'P_CNTRY',
         P_CITY: 'P_CITY',
         P_STREET: 'P_STREET',
         P_POST_IND: 'P_POST_IND',
         MRC_PHONE: 'MRC_PHONE',
         REPORT_CRIT: 'REPORT_CRIT',
         E_MAIL: 'E_MAIL',
         ADD_INFO: 'ADD_INFO',
         REPORT_CRIT2: 'r4',
         USER_FIELD: 'f4'
       },
       {
         clientId: '4',
         clientName: 'Adrey',
         clientStatus: 'Active',
         FAX: 'fax-l',
         FULL_NAME: 'Killy Week',
         CNTRY: 'Uzcc',
         CITY: 'Tashkent',
         REG_NR: 'reg nr',
         STREET: 'STREET',
         POST_IND: 'POST_IND',
         PHONE: '+998 97 001 01 01',
         CONT_PERSON: 'CONT_PERSON',
         MCC: 'MCC',
         P_CNTRY: 'P_CNTRY',
         P_CITY: 'P_CITY',
         P_STREET: 'P_STREET',
         P_POST_IND: 'P_POST_IND',
         MRC_PHONE: 'MRC_PHONE',
         REPORT_CRIT: 'REPORT_CRIT',
         E_MAIL: 'E_MAIL',
         ADD_INFO: 'ADD_INFO',
         REPORT_CRIT2: 'report 2',
         USER_FIELD: 'user field vv'
       },
       {
         clientId: '5',
         clientName: 'Alisaa',
         clientStatus: 'Active',
         FAX: 'fax-l',
         FULL_NAME: 'Killy Week',
         CNTRY: 'Uzcc',
         CITY: 'Tashkent',
         REG_NR: 'reg nr',
         STREET: 'STREET',
         POST_IND: 'POST_IND',
         PHONE: '+998 33 003 03 03',
         CONT_PERSON: 'CONT_PERSON',
         MCC: 'MCC',
         P_CNTRY: 'P_CNTRY',
         P_CITY: 'P_CITY',
         P_STREET: 'P_STREET',
         P_POST_IND: 'P_POST_IND',
         MRC_PHONE: 'MRC_PHONE',
         REPORT_CRIT: 'REPORT_CRIT',
         E_MAIL: 'E_MAIL',
         ADD_INFO: 'ADD_INFO',
         REPORT_CRIT2: 'r3',
         USER_FIELD: 'f3'
       },
  ];

  getClientList()/*: Observable<ClientList[]> */ {
    return this.http.get<ClientList[]>(this.Url + '/clients')
      .toPromise()
      .then((data) => {
        return data;
      });
  }

  getHumoTerminalList(): Observable<HumoTerminal[]> {
    return this.http.get<HumoTerminal[]>(this.Url + '/merchant');
  }

  authMerchant(item: any): boolean {
    return this.merchants.some(m => m.MERCHANT === item);
  }

  authContract(item: any): boolean {
    return this.humoTerminal.some(m => m.MERCHANT === item);
  }

  authTerminal(item: any): boolean {
    return this.humoTerminalMod.some(m => m.MERCHANT === item);
  }

  addMerchants(): HumoTerminal[] {
// api call and replace the array with API array
    // merchants: HumoTerminal[] = getData from CBS API
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.merchants.length; i++) {
      this.humoTerminal.push(this.merchants[i]);
    }
    return this.humoTerminal;
  }

  deleteContract(customer: any) {
    const index: number = this.merchants.indexOf(customer);
    if (index !== -1) {
      this.merchants.splice(index, 1);
    }
  }

  deleteTerminal(cus: any) {
    const index: number = this.humoTerminalMod.indexOf(cus);
    if (index !== -1) {
      this.humoTerminalMod.splice(index, 1);
    }
  }

  updateContract(updateForm: NgForm) {

    const index = this.merchants.indexOf(updateForm.value.MERCHANT);
    if (index !== -1) {
      this.merchants[index] = updateForm.value;
    }
    /*
        this.merchants.push(this.merchants[index]);*/
    /*console.log('Updated contract:  ', this.merchants[index]);*/
  }

  updateMerchant(customer: NgForm) {
    const i = this.merchants.indexOf(customer.value.MERCHANT);
    if (i !== -1) {
      this.merchants[i] = customer.value;
    }
    console.log('Updated contract:  ', this.merchants[i]);
  }

  updateHumoTerminal(updateHumoTerminal: NgForm) {
    const index = this.humoTerminalMod.indexOf(updateHumoTerminal.value.MERCHANT);
    if (index !== -1) {
      this.humoTerminalMod[index] = updateHumoTerminal.value;
    }
  }
}
