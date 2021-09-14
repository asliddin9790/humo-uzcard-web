export class HumoPosTerminal {
  constructor(
    public merchantId: string,
    public terminalType: string,
    public terminalKind: string,
    public guide: string,
    public pointCodeTerminal: string,
    public installationDate: string,
    public terminalStatus: string,
    public terminalInventoryNumber: number,
    public terminalSerialType: string,
    public terminalSerialNumber: string,
    public terminalModel: string,
    public connectionInterface: string,
    public hostConnectionMethod: string,
    public tmcServerAccount: string,
    public configurableHostConnectionMethod: string,
    public terminalBusinessType: string,
    public accountNumber: string,
  ){}
}
