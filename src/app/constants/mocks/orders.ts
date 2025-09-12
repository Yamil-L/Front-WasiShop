import { Order } from '../../interfaces/order';
import { orderRows } from './order-rows';
export const orders: Order[] = [
  {
    id: '0',
    rows: [orderRows[0], orderRows[1]],
    delivery: new Date(2024, 2, 12),
  },
  {
    id: '1',
    rows: [orderRows[2], orderRows[3], orderRows[4]],
    delivery: new Date(2024, 2, 12),
  },
  {
    id: '2',
    rows: [orderRows[3], orderRows[1], orderRows[5]],
    delivery: new Date(2024, 2, 12),
  },
];
