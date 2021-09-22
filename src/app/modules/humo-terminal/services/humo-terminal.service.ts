import {Injectable} from '@angular/core';
import {HumoTerminal} from 'src/app/model/humo-terminal';
import {NgForm} from '@angular/forms';
import {HumoTerminalMod} from '../../../model/humo-terminal-mod';
import {HttpClient} from '@angular/common/http';
import {ClientList} from '../../../model/client-list';
import {HumoContractList} from '../../../model/humo-contract-list';

@Injectable({
  providedIn: 'root'
})
export class HumoTerminalService {


  private Url = 'http://localhost:8080/api/humo-terminal';

  constructor(private http: HttpClient) {
  }

  humoCard = {
    humoCommisson: '0.2',
    humoFees: '0.5'
  };
  visa =
    {
      internationalVisaCommission: '0.5',
      internationalVisaFees: '1',
      localVisaCommission: '0.2',
      localVisaFees: '0.5'
    };
  masterCard = {
    masterCommission: '0.2',
    masterFees: '0.4',
    localMasterCommission: 'o.1',
    localMasterFees: '0.2'
  };
  unionPay = {
    unionPayCommission: '0.8',
    unionPayFees: '0.6'
  };


  status = [
    {status: 'Blocked'},
    {status: 'Actived'}
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
  contractList: HumoContractList[] = [];

  contracts: HumoContractList[] = [
    {
      merchantId: '123',
      numberOfContract: '3214',
      dateOfContract: '20.01.2021',
      branchCode: '00981',
      status: 'Updated',
      humoCommisson: '0.52',
      humoFees: '0.23',
      internationalVisaCommission: '0.6',
      internationalVisaFees: '0.5',
      masterCommission: '0.4',
      masterFees: '0.3',
      localVisaCommission: '0.5',
      localVisaFees: '0.7',
      localMasterCommission: '0.5',
      localMasterFees: '0.3',
      unionPayCommission: '0.2',
      unionPayFees: '0.1',
    },
    {
      merchantId: '123',
      numberOfContract: '3214',
      dateOfContract: '20.01.2021',
      branchCode: '00981',
      status: 'Blocked',
      humoCommisson: '0.52',
      humoFees: '0.23',
      internationalVisaCommission: '0.6',
      internationalVisaFees: '0.5',
      masterCommission: '0.4',
      masterFees: '0.3',
      localVisaCommission: '0.5',
      localVisaFees: '0.7',
      localMasterCommission: '0.5',
      localMasterFees: '0.3',
      unionPayCommission: '0.2',
      unionPayFees: '0.1',
    }
  ];

  humoTerminalType = [
    {type: 'epos', title: 'EPOS Terminal'},
    {type: 'imprinters', title: 'Imprinters Terminal'},
    {type: 'pos', title: 'POS Terminal'},
    {type: 'atm', title: 'ATM'}
  ];
  humoTerminalModDB: HumoTerminalMod[];
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
  /*  humoContract: HumoContractList[] = [
      {
        merchantId: '123',
        numberOfContract: '555',
        dateOfContract: '29.12.2020',
        branchCode: '00981',
        humoCommisson: '0.2',
        humoFees: '0.5',
        internationalVisaCommission: '0.5',
        internationalVisaFees: '0.3',
        masterCommission: '0.1',
        masterFees: '0.1',
        localVisaCommission: '0.6',
        localVisaFees: '0.6'
      },
      {
        merchantId: '321',
        numberOfContract: '444',
        dateOfContract: '01.01.2021',
        branchCode: '00981',
        humoCommisson: '0.2',
        humoFees: '0.5',
        internationalVisaCommission: '0.5',
        internationalVisaFees: '0.3',
        masterCommission: '0.1',
        masterFees: '0.1',
        localVisaCommission: '0.6',
        localVisaFees: '0.6'
      },
      {
        merchantId: '35',
        numberOfContract: '444',
        dateOfContract: '01.01.2021',
        branchCode: '00981',
        humoCommisson: '0.2',
        humoFees: '0.5',
        internationalVisaCommission: '0.5',
        internationalVisaFees: '0.3',
        masterCommission: '0.1',
        masterFees: '0.1',
        localVisaCommission: '0.6',
        localVisaFees: '0.6'
      },
      {
        merchantId: '50',
        numberOfContract: '5050',
        dateOfContract: '01.01.2021',
        branchCode: '00981',
        humoCommisson: '0.2',
        humoFees: '0.5',
        internationalVisaCommission: '0.5',
        internationalVisaFees: '0.3',
        masterCommission: '0.1',
        masterFees: '0.1',
        localVisaCommission: '0.6',
        localVisaFees: '0.6'
      },
      {
        merchantId: '100',
        numberOfContract: '4040',
        dateOfContract: '01.01.2021',
        branchCode: '00981',
        humoCommisson: '0.2',
        humoFees: '0.5',
        internationalVisaCommission: '0.5',
        internationalVisaFees: '0.3',
        masterCommission: '0.1',
        masterFees: '0.1',
        localVisaCommission: '0.6',
        localVisaFees: '0.6'
      }
    ];*/

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

  addMerchant(m: any) {
    console.log('m = ' + m);
    this.http.post(this.Url + '/merchant', m).subscribe(
      data => {
        console.log('data: ' + data);
      }
    );
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

  delete(customer: any) {
    const index: number = this.merchants.indexOf(customer);
    if (index !== -1) {
      this.merchants.splice(index, 1);
    }
  }

  deleteContract(customer: any) {
    const index: number = this.contracts.indexOf(customer);
    if (index !== -1) {
      this.contracts.splice(index, 1);
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
