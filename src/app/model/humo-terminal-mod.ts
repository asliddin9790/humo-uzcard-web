export class HumoTerminalMod {
  constructor(public merchantId: string,
              public terminalId: string,
              public terminalType1: string,
              public terminalKind: string,
              public guide: string,
              public pointCodeTerminal: string,
              public installationDate: string,
              public terminalStatus: string,
              public terminalInventoryNumber: number,
              public terminalSerialType: string,
              public terminalSerialNumber: string,
              public interfaceConnection: string,
              public connectionHost: string,
              public accountTMC: string,
              public configTMC: string,
              public terminalType2: string,
              public accountTransitory: string) {
  }
}
