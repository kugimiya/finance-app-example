import { CreatePageModule } from '@codeleaf-sdk/core';
import InvoicesStore from './store';
import InvoicesService from './service';
import InvoicesPage from './page';

export const InvoicesModule = CreatePageModule<InvoicesStore, InvoicesService>({
  path: '/',
  component: InvoicesPage,
  store: [InvoicesStore, null],
  service: [InvoicesService, null],
});
