import { Invoice } from '@models/Invoice';
import { Currency } from '../../enums/Currency';
import { InvoiceStatus } from '../../enums/InvoiseStatus';

export default class InvoicesService {
  getData(): Promise<Invoice[]> {
    return Promise.resolve([
      // First invoice
      {
        id: 'fdd0b6e4-4527-11eb-b378-0242ac130002',
        number: '1',
        createdDate: new Date('12-01-2020 12:35'),
        currency: Currency.RUB,
        fundingRequest: 12000,
        fundingResponse: 11000,
        status: InvoiceStatus.FUNDING_RESPONSE_ACCEPTED,
        owner: {
          id: 'fdd0b9d2-4527-11eb-b378-0242ac130002',
          name: 'Omega Bank',
        },
        program: {
          id: 'fdd0bb62-4527-11eb-b378-0242ac130002',
          name: 'PC-Program-Name-Supplier',
        },
        supplier: {
          id: 'fdd0bc52-4527-11eb-b378-0242ac130002',
          firstName: 'Smith',
          lastName: 'John',
        },
      },

      // Second invoice
      {
        id: 'fdd0b6e4-4527-11eb-b378-0242ac130003',
        number: '2',
        createdDate: new Date('12-01-2020 13:35'),
        currency: Currency.RUB,
        fundingRequest: 15000,
        fundingResponse: 100,
        status: InvoiceStatus.FUNDING_RESPONSE_ACCEPTED,
        owner: {
          id: 'fdd0b9d2-4527-11eb-b378-0242ac130002',
          name: 'Omega Bank',
        },
        program: {
          id: 'fdd0bb62-4527-11eb-b378-0242ac130002',
          name: 'PC-Program-Name-Supplier',
        },
        supplier: {
          id: 'fdd0bc52-4527-11eb-b378-0242ac130002',
          firstName: 'John',
          lastName: 'John',
        },
      },

      // Third invoice
      {
        id: 'fdd0b6e4-4527-11eb-b378-0242ac130003',
        number: '3',
        createdDate: new Date('12-01-2020 14:35'),
        currency: Currency.USD,
        fundingRequest: 300,
        fundingResponse: 290,
        status: InvoiceStatus.FUNDING_RESPONSE_ACCEPTED,
        owner: {
          id: 'fdd0b9d2-4527-11eb-b378-0242ac130002',
          name: 'Omega Bank',
        },
        program: {
          id: 'fdd0bb62-4527-11eb-b378-0242ac130002',
          name: 'PC-Program-Name-Supplier',
        },
        supplier: {
          id: 'fdd0bc52-4527-11eb-b378-0242ac130002',
          firstName: 'Smith',
          lastName: 'John',
        },
      },
    ]);
  }
}
