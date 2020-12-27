import { WithId } from '@models/Utils';

export type Supplier = WithId & {
  firstName: string;
  lastName: string;
}
