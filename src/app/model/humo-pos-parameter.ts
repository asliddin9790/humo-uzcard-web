export class HumoPosParameter {
  constructor(
    public terminalTypes: string[],
    public terminalKinds: string[],
    public guides: string[],
    public terminalStatuses: string[],
    public terminalSerialTypes: string[],
    public terminalModels: string[],
    public connectionInterfaces: string[],
    public hostConnectionMethods: string[],
    public tmcServerAccounts: string[],
    public configurableHostConnectionMethods: string[],
    public terminalBusinessTypes: string[]
  ) {
  }
}
