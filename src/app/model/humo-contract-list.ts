export class HumoContractList {
  constructor(
    public merchantId: string,
    public numberOfContract: string,
    public dateOfContract: string,
    public branchCode: string,
    public status: string,

    public humoCommisson: string,
    public humoFees: string,

    public internationalVisaCommission: string,
    public internationalVisaFees: string,

    public masterCommission: string,
    public masterFees: string,

    public localVisaCommission: string,
    public localVisaFees: string,

    public localMasterCommission: string,
    public localMasterFees: string,

    public unionPayCommission: string,
    public unionPayFees: string,
  ) {
  }
}
