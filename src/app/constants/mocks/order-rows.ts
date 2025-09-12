import { OrderRow } from './../../interfaces/order-row';
import { products } from './products';
export const orderRows: OrderRow[] = [
  {
    id: '0',
    product: products[0],
    quantity: 2,
    unitPrice: products[0].price,
  },
  {
    id: '1',
    product: products[1],
    quantity: 3,
    unitPrice: products[1].price - 2,
  },
  {
    id: '2',
    product: products[2],
    quantity: 4,
    unitPrice: products[2].price - 1,
  },
  {
    id: '3',
    product: products[3],
    quantity: 2,
    unitPrice: products[3].price,
  },
  {
    id: '4',
    product: products[4],
    quantity: 3,
    unitPrice: products[4].price - 1,
  },
  {
    id: '5',
    product: products[5],
    quantity: 4,
    unitPrice: products[5].price,
  },
];
