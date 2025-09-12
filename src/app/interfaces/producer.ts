import { SafeUrl } from '@angular/platform-browser';
import { Social } from './social';
import { FeaturedProduct } from './product';

export interface FeaturedProducer {
  id: string;
  name: string;
  image: SafeUrl;
  socials: Social[];
  products: FeaturedProduct[];
}
