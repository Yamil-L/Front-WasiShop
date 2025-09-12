import { BundleMock } from '../constants/mocks/bundles';

export interface Subscription {
  id: string;
  bundle: BundleMock;
  delivery: number;
}
