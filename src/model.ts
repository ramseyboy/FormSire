import { Label } from './decorators'

export class CreateModel
{
    @Label("Company Name")
    companyName!: string | null;
    
    @Label("Billing Address")
    billingAddress!: string | null;

    @Label("Billing City")
    billingCity!: string | null;

    @Label("State")
    billingStateOrProvince!: string | null;

    @Label("Postal Code")
    postalCode!: string | null;

    @Label("Phone")
    phoneNumber!: string | null;

    @Label("Notes")
    notes!: string | null;
}