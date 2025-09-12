import { Component, input, InputSignal } from '@angular/core';
import { Rating } from '../../common/rating/rating';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProductDto } from '../../../services/product-service';
import { ProductService } from '../../../services/product-service';

@Component({
  selector: 'app-featured-product-card',
  imports: [Rating, CurrencyPipe],
  templateUrl: './featured-product-card.html',
  styleUrl: './featured-product-card.css',
})
export class FeaturedProductCard {
  product: InputSignal<ProductDto> = input.required<ProductDto>();

  constructor(private router: Router, private productService: ProductService) {}
  get discountedPrice(): number {
    return (
      this.product().price -
      (this.product().price * this.product().discount_percent!) / 100
    );
  }

  goToProduct() {
    this.router.navigate(['/product', this.product().id]);
  }

  get imageUrl(): string {
    return this.productService.getProductImageUrl(this.product().id);
  }
}
