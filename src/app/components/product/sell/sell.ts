// import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CurrencyPipe } from '@angular/common';
// import {
//   LucideAngularModule,
//   LucideIconData,
//   Plus,
//   Minus,
//   Heart,
//   Share2,
// } from 'lucide-angular';
// import { Rating } from '../../common/rating/rating';
// import { Comments } from '../../common/comments/comments';
// import { ProductDto, ProductService } from '../../../services/product-service';

// @Component({
//   selector: 'app-sell',
//   imports: [CurrencyPipe, LucideAngularModule, Rating, Comments],
//   templateUrl: './sell.html',
//   styleUrl: './sell.css',
//   standalone: true,
// })
// export class Sell implements OnInit {
//   private cdr = inject(ChangeDetectorRef);
//   product!: ProductDto;
//   productImageUrl: string = '';
//   quantity: number = 1;

//   plusIcon: LucideIconData = Plus;
//   minusIcon: LucideIconData = Minus;
//   heartIcon: LucideIconData = Heart;
//   shareIcon: LucideIconData = Share2;

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.productService.getProductById(id).subscribe({
//         next: (product) => {
//           this.product = product;
//           this.productImageUrl = this.productService.getProductImageUrl(
//             product.id
//           );
//           this.cdr.detectChanges();
//         },
//       });
//     }
//   }

//   get discountedPrice(): number {
//     if (!this.product) return 0;
//     return (
//       this.product.price -
//       (this.product.price * (this.product.discount_percent ?? 0)) / 100
//     );
//   }

//   decreaseQuantity() {
//     this.quantity = Math.max(1, this.quantity - 1);
//   }

//   increaseQuantity() {
//     this.quantity += 1;
//   }

//   addToCart() {
//     if (!this.product?.id) return;

//     const key = 'cart';
//     const stored = localStorage.getItem(key);
//     let cart: { id: string; quantity: number }[] = stored
//       ? JSON.parse(stored)
//       : [];

//     const existing = cart.find((item) => item.id === this.product.id);

//     if (existing) {
//       existing.quantity += this.quantity;
//     } else {
//       cart.push({ id: this.product.id, quantity: this.quantity });
//     }

//     localStorage.setItem(key, JSON.stringify(cart));
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconData,
  Plus,
  Minus,
  Heart,
  Share2,
} from 'lucide-angular';
import { Rating } from '../../common/rating/rating';
import { Comments } from '../../common/comments/comments';

interface Product {
  id: string;
  name: string;
  unit: string;
  price: number;
  discount_percent: number;
  image_path: string;
  averageRate: number;
}

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CurrencyPipe, NgClass, LucideAngularModule, Rating, Comments],
  templateUrl: './sell.html',
  styleUrls: ['./sell.css'],
})
export class Sell implements OnInit {
  product!: Product;
  productImageUrl: string = '';
  quantity: number = 1;

  plusIcon: LucideIconData = Plus;
  minusIcon: LucideIconData = Minus;
  heartIcon: LucideIconData = Heart;
  shareIcon: LucideIconData = Share2;

  isFavorite = false;

  ngOnInit(): void {
    // Producto estático
    this.product = {
      id: 'p1',
      name: 'Auriculares Inalámbricos Premium',
      unit: 'unidad',
      price: 79.99,
      discount_percent: 15,
      image_path: '/images/auriculares.jpg',
      averageRate: 4,
    };

    this.productImageUrl = this.product.image_path;
  }

  get discountedPrice(): number {
    return this.product.price - (this.product.price * this.product.discount_percent) / 100;
  }

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity++;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  addToCart() {
    const key = 'cart';
    const stored = localStorage.getItem(key);
    let cart: { id: string; quantity: number }[] = stored ? JSON.parse(stored) : [];

    const existing = cart.find((item) => item.id === this.product.id);
    if (existing) {
      existing.quantity += this.quantity;
    } else {
      cart.push({ id: this.product.id, quantity: this.quantity });
    }

    localStorage.setItem(key, JSON.stringify(cart));
    alert('Producto agregado al carrito');
  }
}
