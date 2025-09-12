import { FeaturedProduct } from './product';

export interface OrderRow {
  id: string;
  product: FeaturedProduct;
  quantity: number;
  unitPrice: number;
}
