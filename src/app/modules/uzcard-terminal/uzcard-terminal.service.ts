import {Injectable} from '@angular/core';
import {UzcardTerminal} from '../../model/uzcard-terminal';

@Injectable({
  providedIn: 'root'
})
export class UzcardTerminalService {

  // @ts-ignore
  uzcardTerminal: UzcardTerminal[] = [];

  btrt: UzcardTerminal[] = [
    {
      clientId: '123',
      client: 'Asadbek Hamidov 123',
      smartVista: 'smart 123',
      nameV: 'Client 123',
      codeCategory: 'Category-1123',
      regTorgov: 'reg -12 123',
      numberLisenziya: '456 123',
      lastName: 'Hamidov123',
      name: 'Asadbek123',
      patronymic: 'pagar123',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '124',
      client: 'Asadbek Hamidov124',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '123',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+787878787',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '7878',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '96989',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '12355',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '1237777',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '123968',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '1235454',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '77777',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },  {
      clientId: '12355',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '1237777',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '123968',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '1235454',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
    {
      clientId: '77777',
      client: 'Asadbek Hamidov',
      smartVista: 'smart',
      nameV: 'Client',
      codeCategory: 'Category-1',
      regTorgov: 'reg -12',
      numberLisenziya: '456',
      lastName: 'Hamidov',
      name: 'Asadbek',
      patronymic: 'pagar',
      documentType: 'doc',
      documentSeries: 'AA',
      documentNumber: '4447878',
      documentV: 'V1',
      dataV: '20.12.23',
      position: 'relative',
      addresType: 'text',
      domU: '38-uy',
      town: 'Tashkent',
      region: 'Chilonzor',
      isoCode: '2221',
      phoneNumber: '+99897561234',
      mobilePhone: '71 2005656',
      email: 'qwert@gmail.com',
      schotNumber: '00089023078',
      codeValuta: '4587916'
    },
  ];

  constructor() {
  }

  // @ts-ignore
  addBTRT(): UzcardTerminal[] {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.btrt.length; i++) {
      this.uzcardTerminal.push(this.btrt[i]);
    }
    return this.uzcardTerminal;
  }
}
