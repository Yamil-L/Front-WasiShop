import { Component, input, InputSignal } from '@angular/core';
import { Rating } from '../../common/rating/rating';
import { Router } from '@angular/router';
import { ProductDto } from '../../../services/product-service';
import { ProductService } from '../../../services/product-service';

@Component({
  selector: 'app-featured-product-card',
  imports: [Rating],
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
  const product = this.product();
  sessionStorage.setItem('selectedProduct', JSON.stringify(product));
  this.router.navigate(['/product/sell']);
}


  get imageUrl(): string {
    return this.productService.getProductImageUrl(this.product().id);
  }
}
