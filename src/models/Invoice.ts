import { InvoiceStatus } from '../enums/InvoiseStatus';
import { Currency } from '../enums/Currency';
import { WithId } from '@models/Utils';
import { Owner } from '@models/Owner';
import { Supplier } from '@models/Supplier';
import { Program } from '@models/Program';

export type Invoice = WithId & {
  number: string;
  owner: Owner;
  supplier: Supplier;
  status: InvoiceStatus;
  currency: Currency;
  program: Program;
  fundingRequest: number;
  fundingResponse: number;
  createdDate: Date;
}
