export class HumoAtmTerminal {
  constructor(public merchantId: string,
              public terminalType: string,
              public terminalKind: string,
              public guide: string,
              public pointCodeTerminal: string,
              public installationDate: string,
              public terminalStatus: string,
              public terminalInventoryNumber: number,
              public terminalSerialType: string,
              public terminalSerialNumber: string,
              public accountNumber: string) {
  }
}
