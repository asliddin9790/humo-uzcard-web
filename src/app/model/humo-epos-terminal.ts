export class HumoEposTerminal {
  constructor(
    public merchantId: string,
    public terminalType: string,
    public terminalKind: string,
    public pointCodeTerminal: string,
    public installationDate: string,
    public terminalStatus: string,
    public terminalInventoryNumber: number,
    public accountNumber: string,
  ){}
}
