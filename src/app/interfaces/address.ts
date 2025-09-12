import { Order } from './order';
import { Subscription } from './subscription';

export interface Address {
  id: string;
  country: string;
  state: string;
  city: string;
  line1: string;
  line2: string;
  number: string;
  subscriptions?: Subscription[];
  orders?: Order[];
}
