import { Address } from '../../interfaces/address';
import { subscriptions } from './subscriptions';
import { orders } from './orders';
export const addresses: Address[] = [
  {
    id: '0',
    country: 'United States',
    state: 'California',
    city: 'San Francisco',
    line1: 'Market Street',
    line2: 'Suite 500',
    number: '123',
    subscriptions: [subscriptions[0]],
  },
  {
    id: '1',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    line1: 'Bloor Street West',
    line2: 'Apt 12B',
    number: '456',
    subscriptions: subscriptions,
  },
  {
    id: '2',
    country: 'Mexico',
    state: 'Ciudad de México',
    city: 'Coyoacán',
    line1: 'Av. Universidad',
    line2: 'Edificio 3, Piso 2',
    number: '789',
    orders: [orders[0]],
  },
  {
    id: '3',
    country: 'Germany',
    state: 'Berlin',
    city: 'Berlin',
    line1: 'Unter den Linden',
    line2: '',
    number: '101',
    orders: [orders[1], orders[2]],
  },
];
