import { Component, input, InputSignal } from '@angular/core';
import { Router } from '@angular/router';
import { BrandDto, BrandService } from '../../../services/brand-service';

@Component({
  selector: 'app-featured-producer-card',
  imports: [],
  templateUrl: './featured-producer-card.html',
  styleUrl: './featured-producer-card.css',
})
export class FeaturedProducerCard {
  producer: InputSignal<BrandDto> = input.required<BrandDto>();

  constructor(private router: Router, private brandService: BrandService) {}
  goToProducer() {
    this.router.navigate(['/producer', this.producer().id]);
  }

  get imageUrl(): string {
    return this.brandService.getBrandImageUrl(this.producer().id);
  }
}
