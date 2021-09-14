export class HumoContract {
  constructor(
    /*public MERCHANT: string,
    public AGR_NUMBER: string,
    public AGR_DATE: string,
    public ACQ_BRANCH: string*/
    public merchantId: string,
    public numberOfContract: string,
    public dateOfContract: string,
    public humoCommisson: string,
    public humoFees: string,
    public internationalVisaCommission: string,
    public internationalVisaFees: string,
    public masterCommission: string,
    public masterFees: string,
    public localVisaCommission: string,
    public localVisaFees: string
  ) {
  }
}
