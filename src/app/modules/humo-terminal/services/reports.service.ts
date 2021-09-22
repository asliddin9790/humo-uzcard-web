import {Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ReportsService {

list = [];

  constructor() {
  }

  reportExcel(customer) {
    this.list.push(customer);
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(customer); // Sale Data
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
   /* this.reportClearList(this.list[0]);*/
  }

  reportClearList(customer) {
    const index: number = this.list.indexOf(customer);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
}
