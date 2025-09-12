// // src/app/components/featured-products/featured-products.ts
// import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
// import { BreakpointObserver } from '@angular/cdk/layout';
// import {
//   LucideAngularModule,
//   ChevronLeft,
//   ChevronRight,
//   LucideIconData,
// } from 'lucide-angular';
// import { FeaturedProductCard } from '../featured-product-card/featured-product-card';
// import { ProductService, ProductDto } from '../../../services/product-service';

// @Component({
//   selector: 'app-featured-products',
//   imports: [FeaturedProductCard, LucideAngularModule],
//   templateUrl: './featured-products.html',
//   styleUrl: './featured-products.css',
// })
// export class FeaturedProducts implements OnInit {
//   leftIcon: LucideIconData = ChevronLeft;
//   rightIcon: LucideIconData = ChevronRight;

//   itemsPerGroup = 3;
//   products: ProductDto[] = [];

//   constructor(
//     private breakpointObserver: BreakpointObserver,
//     private cdr: ChangeDetectorRef,
//     private productService: ProductService
//   ) {}

//   ngOnInit() {
//     this.productService.getAll().subscribe({
//       next: (data) => {
//         this.products = data.slice(0, 8);
//         this.cdr.markForCheck();
//       },
//       error: (err) => console.error('Failed to load products:', err),
//     });

//     this.breakpointObserver
//       .observe([
//         '(max-width: 740px)',
//         '(max-width: 1050px)',
//         '(max-width: 1440px)',
//       ])
//       .subscribe((state) => {
//         if (state.breakpoints['(max-width: 740px)']) {
//           this.itemsPerGroup = 1;
//         } else if (state.breakpoints['(max-width: 1050px)']) {
//           this.itemsPerGroup = 2;
//         } else if (state.breakpoints['(max-width: 1440px)']) {
//           this.itemsPerGroup = 3;
//         } else {
//           this.itemsPerGroup = 4;
//         }
//         this.cdr.markForCheck();
//       });
//   }

//   featuredProductsInGroups(groupSize: number): ProductDto[][] {
//     const groups: ProductDto[][] = [];

//     for (let i = 0; i < this.products.length; i += groupSize) {
//       groups.push(this.products.slice(i, i + groupSize));
//     }

//     return groups;
//   }
// }




import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  LucideIconData,
} from 'lucide-angular';
import { FeaturedProductCard } from '../featured-product-card/featured-product-card';
import { ProductDto } from '../../../services/product-service';

@Component({
  selector: 'app-featured-products',
  imports: [FeaturedProductCard, LucideAngularModule],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts implements OnInit {
  leftIcon: LucideIconData = ChevronLeft;
  rightIcon: LucideIconData = ChevronRight;

  itemsPerGroup = 3;
  products: ProductDto[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // 🔹 Datos estáticos que cumplen con ProductDto
    this.products = [
      {
        id: '1',
        name: 'Cámara Profesional',
        description: 'Cámara digital con lente intercambiable y grabación en 4K.',
        price: 799.99,
        discount_percent: 10,
        created_date: '2025-01-15',
        sku: 'CAM-001',
        unit: 'pcs',
        bundle_id: "",
        brand_id: "1",
        image_path: '/images/camara.jpeg',
      },
      {
        id: '2',
        name: 'Auriculares Inalámbricos',
        description: 'Con cancelación activa de ruido y estuche de carga rápida.',
        price: 199.99,
        discount_percent: 5,
        created_date: '2025-02-01',
        sku: 'AUD-002',
        unit: 'pcs',
        bundle_id: "",
        brand_id: "2",
        image_path: '/images/auriculares.jpg',
      },
      {
        id: '3',
        name: 'Smartwatch Deportivo',
        description: 'Monitoreo de frecuencia cardíaca, oxígeno y GPS integrado.',
        price: 149.99,
        discount_percent: 15,
        created_date: '2025-02-20',
        sku: 'SMW-003',
        unit: 'pcs',
        bundle_id: "",
        brand_id: "3",
        image_path: '/images/smartwatch.webp',
      },
    ];

    // 🔹 Responsividad igual que antes
    this.breakpointObserver
      .observe([
        '(max-width: 740px)',
        '(max-width: 1050px)',
        '(max-width: 1440px)',
      ])
      .subscribe((state) => {
        if (state.breakpoints['(max-width: 740px)']) {
          this.itemsPerGroup = 1;
        } else if (state.breakpoints['(max-width: 1050px)']) {
          this.itemsPerGroup = 2;
        } else if (state.breakpoints['(max-width: 1440px)']) {
          this.itemsPerGroup = 3;
        } else {
          this.itemsPerGroup = 4;
        }
        this.cdr.markForCheck();
      });
  }

  featuredProductsInGroups(groupSize: number): ProductDto[][] {
    const groups: ProductDto[][] = [];
    for (let i = 0; i < this.products.length; i += groupSize) {
      groups.push(this.products.slice(i, i + groupSize));
    }
    return groups;
  }
}

