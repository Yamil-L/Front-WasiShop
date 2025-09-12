import { SafeUrl } from '@angular/platform-browser';

export interface FeaturedProduct {
  id: string;
  name: string;
  image: SafeUrl;
  price: number;
  quantity: number;
  unit: string;
  discount?: number;
  averageRate: number;
  category: string;
  tags?: string[];
}
