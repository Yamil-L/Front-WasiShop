import { products } from './products';

import { SafeUrl } from '@angular/platform-browser';
import { FeaturedProduct } from '../../interfaces/product';

interface ProductQuantity {
  product: FeaturedProduct;
  quantity: number;
}
export interface BundleMock {
  id: string;
  name: string;
  description: string;
  image: SafeUrl;
  price: number;
  discount?: number;
  averageRate: number;
  categories: string[];
  tags: string[];
  products: ProductQuantity[];
}

export const bundles: BundleMock[] = [
  {
    id: '0',
    name: 'Munro Honey Pack',
    description:
      "A sweet selection of premium, pure honey varieties from Munro's finest apiaries — perfect for natural sweetness and wellness.",
    image:
      'https://images.unsplash.com/photo-1729260551386-0b6ba0a662d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 90,
    averageRate: 3.5,
    categories: ['Honey', 'Sweets'],
    tags: ['New'],
    products: [
      { product: products[2], quantity: 2 },
      { product: products[3], quantity: 2 },
      { product: products[4], quantity: 2 },
    ],
    discount: 10,
  },
  {
    id: '1',
    name: "Smith's Farmstead Dairy Pack",
    description:
      "Fresh, handcrafted dairy products from Smith's Farm—milk, cheese, and yogurt made with care and quality.",
    image:
      'https://images.unsplash.com/photo-1663566869071-6c926e373515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 40,
    averageRate: 3.5,
    categories: ['Dairy'],
    tags: ['New'],
    products: [
      { product: products[5], quantity: 2 },
      { product: products[6], quantity: 2 },
      { product: products[7], quantity: 4 },
      { product: products[8], quantity: 2 },
    ],
  },
];
