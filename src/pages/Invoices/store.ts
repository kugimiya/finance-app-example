import { LeafStore } from '@codeleaf-sdk/core';
import { Invoice } from '@models/Invoice';
import { computed, makeObservable, toJS } from 'mobx';
import { getUnixTime } from 'date-fns';
import { InvoiceStatus } from '../../enums/InvoiseStatus';
import { DisplayMode } from '../../enums/DisplayMode';
import { InvoiceSortKey } from '../../enums/InvoiceSortKey';
import { AscDesc } from '../../enums/AscDesc';

type InvoicesStoreState = {
  invoices: Invoice[];
  filters: {
    display: DisplayMode;
    status: InvoiceStatus;
    sortBy: InvoiceSortKey;
    sortDirection: AscDesc;
  };
};

export default class InvoicesStore extends LeafStore<InvoicesStoreState> {
  constructor() {
    super({
      invoices: [],
      filters: {
        display: DisplayMode.LIST,
        status: InvoiceStatus.FUNDING_RESPONSE_ACCEPTED,
        sortBy: InvoiceSortKey.NUMBER,
        sortDirection: AscDesc.ASC,
      },
    }, 'InvoicesStore');

    makeObservable(this, {
      invoices: computed,
      status: computed,
      display: computed,
      sortBy: computed,
      sortDirection: computed,
    });
  }

  get invoices(): Invoice[] {
    return toJS(
      this.state.invoices
        .filter((i) => i.status === this.status)
        .sort((a, b) => {
          if (this.sortBy === InvoiceSortKey.NUMBER) {
            return this.sortDirection === AscDesc.ASC
              ? (+a.number - +b.number)
              : (+b.number - +a.number);
          }

          if (this.sortBy === InvoiceSortKey.CURRENCY) {
            return this.sortDirection === AscDesc.ASC
              ? (+a.currency - +b.currency)
              : (+b.currency - +a.currency);
          }

          if (this.sortBy === InvoiceSortKey.SUPPLIER) {
            return this.sortDirection === AscDesc.ASC
              ? (+a.supplier.firstName - +b.supplier.firstName)
              : (+b.supplier.firstName - +a.supplier.firstName);
          }

          if (this.sortBy === InvoiceSortKey.CREATED_DATE) {
            return this.sortDirection === AscDesc.ASC
              ? (getUnixTime(a.createdDate) - getUnixTime(b.createdDate))
              : (getUnixTime(b.createdDate) - getUnixTime(a.createdDate));
          }

          return (+a.number - +b.number);
        }),
    );
  }

  get status(): InvoiceStatus {
    return this.state.filters.status;
  }

  get display(): DisplayMode {
    return this.state.filters.display;
  }

  get sortBy(): InvoiceSortKey {
    return this.state.filters.sortBy;
  }

  get sortDirection(): AscDesc {
    return this.state.filters.sortDirection;
  }
}
