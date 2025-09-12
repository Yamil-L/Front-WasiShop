// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import {
//   BrandService,
//   BrandDto,
//   SocialDto,
// } from '../../../services/brand-service';
// import {
//   LucideAngularModule,
//   LucideIconData,
//   SquareArrowOutUpRight,
// } from 'lucide-angular';
// import { FeaturedProductCard } from '../../home/featured-product-card/featured-product-card';
// import { ProductService, ProductDto } from '../../../services/product-service';

// @Component({
//   selector: 'app-content',
//   standalone: true,
//   imports: [LucideAngularModule, FeaturedProductCard],
//   templateUrl: './content.html',
//   styleUrl: './content.css',
// })
// export class Content implements OnInit {
//   producer!: BrandDto;
//   socials: SocialDto[] = [];
//   products: ProductDto[] = [];

//   linkIcon: LucideIconData = SquareArrowOutUpRight;

//   constructor(
//     private route: ActivatedRoute,
//     private brandService: BrandService,
//     private productService: ProductService,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id')!;

//     this.brandService.getBrandById(id).subscribe((producer) => {
//       this.producer = producer;

//       this.productService.getAll().subscribe((allProducts) => {
//         this.products = allProducts.filter((p) => p.brand_id === id);

//         this.cdr.detectChanges();
//       });
//     });

//     this.brandService.getSocialsByBrandId(id).subscribe((socials) => {
//       this.socials = socials;
//       this.cdr.detectChanges();
//     });
//   }

//   get producerImage(): string {
//     return this.brandService.getBrandImageUrl(this.producer.id);
//   }

//   getSocialName(social: SocialDto): string {
//     const url = social.url.toLowerCase();
//     if (url.includes('facebook.com')) return 'Facebook';
//     if (url.includes('x.com') || url.includes('twitter.com')) return 'X';
//     if (url.includes('tiktok.com')) return 'TikTok';
//     if (url.includes('instagram.com')) return 'Instagram';
//     if (url.includes('wa.me') || url.includes('whatsapp.com'))
//       return 'Whatsapp';
//     if (url.includes('youtube.com') || url.includes('youtu.be'))
//       return 'Youtube';
//     return 'Web Page';
//   }
// }



import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { FeaturedProductCard } from '../../home/featured-product-card/featured-product-card';
import { ProductDto } from '../../../services/product-service';
import { BrandDto, SocialDto } from '../../../services/brand-service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LucideAngularModule, FeaturedProductCard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  // Datos de ejemplo estáticos
  producer: BrandDto = {
    id: 'brand-1',
    name: 'Static Brand',
    description: 'This is a sample static brand.',
    image_path: '/assets/images/brand-sample.jpg',
    created_date: new Date().toISOString(),
  };

  socials: SocialDto[] = [
    { id: '1', brand_id: 'brand-1', url: 'https://facebook.com/staticbrand' },
    { id: '2', brand_id: 'brand-1', url: 'https://instagram.com/staticbrand' },
    { id: '3', brand_id: 'brand-1', url: 'https://x.com/staticbrand' },
  ];

  products: ProductDto[] = [
    {
      id: 'p1',
      name: 'Static Product 1',
      description: 'Description for product 1',
      price: 100,
      discount_percent: 10,
      sku: 'SP-001',
      unit: 'pcs',
      bundle_id: 'b1',
      brand_id: 'brand-1',
      image_path: '/assets/images/product1.jpg',
      created_date: new Date().toISOString(),
    },
    {
      id: 'p2',
      name: 'Static Product 2',
      description: 'Description for product 2',
      price: 200,
      discount_percent: 15,
      sku: 'SP-002',
      unit: 'pcs',
      bundle_id: 'b2',
      brand_id: 'brand-1',
      image_path: '/assets/images/product2.jpg',
      created_date: new Date().toISOString(),
    },
  ];

  linkIcon: LucideIconData = SquareArrowOutUpRight;

  get producerImage(): string {
    return this.producer.image_path;
  }

  getSocialName(social: SocialDto): string {
    const url = social.url.toLowerCase();
    if (url.includes('facebook.com')) return 'Facebook';
    if (url.includes('x.com') || url.includes('twitter.com')) return 'X';
    if (url.includes('tiktok.com')) return 'TikTok';
    if (url.includes('instagram.com')) return 'Instagram';
    if (url.includes('wa.me') || url.includes('whatsapp.com'))
      return 'Whatsapp';
    if (url.includes('youtube.com') || url.includes('youtu.be'))
      return 'Youtube';
    return 'Web Page';
  }
}
