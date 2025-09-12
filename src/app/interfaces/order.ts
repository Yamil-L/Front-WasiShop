import { OrderRow } from './order-row';
export interface Order {
  id: string;
  rows: OrderRow[];
  delivery: Date;
}
