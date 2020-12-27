import { InvoiceStatus } from '../enums/InvoiseStatus';
import { InvoiceSortKey } from '../enums/InvoiceSortKey';
import { Currency } from '../enums/Currency';

export default {
  invoices: {
    sortKey: ({
      NUMBER: 'Номер',
      SUPPLIER: 'Поставщик',
      CURRENCY: 'Валюта',
      CREATED_DATE: 'Создан',
    } as Record<InvoiceSortKey, string>),

    currency: ({
      EUR: 'EUR',
      UAH: 'UAH',
      RUB: 'RUB',
      USD: 'USD',
    } as Record<Currency, string>),

    status: ({
      FUNDING_REQUESTED: 'Запрос',
      FUNDING_RESPONSE_PENDING: 'Ожидание ответа',
      FUNDING_RESPONSE_DECISION_PENDING: 'Ожидание решения',
      FUNDING_RESPONSE_ACCEPTED: 'Подтвержено',
      FUNDING_PAYMENT_REJECTED: 'Отменено',
    } as Record<InvoiceStatus, string>),

    tableColumnNames: {
      number: 'Номер',
      ownerName: 'Владелец',
      supplierName: 'Поставщик',
      status: 'Статус',
      currency: 'Валюта',
      programName: 'Услуга',
      fundRequest: 'Запрос',
      fundResponse: 'Возврат',
      createdDate: 'Дата создания',
    },
  },
};
