import { Subscription } from '../../interfaces/subscription';
import { bundles } from './bundles';

export const subscriptions: Subscription[] = [
  {
    id: '0',
    bundle: bundles[0],
    delivery: 31,
  },
  {
    id: '1',
    bundle: bundles[1],
    delivery: 18,
  },
];
