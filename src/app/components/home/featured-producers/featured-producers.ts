// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { FeaturedProducerCard } from '../featured-producer-card/featured-producer-card';
// import { BrandDto, BrandService } from '../../../services/brand-service';

// @Component({
//   selector: 'app-featured-producers',
//   imports: [FeaturedProducerCard],
//   templateUrl: './featured-producers.html',
//   styleUrl: './featured-producers.css',
// })
// export class FeaturedProducers implements OnInit {
//   featuredProducersTemplate: BrandDto[] = [];

//   constructor(
//     private brandService: BrandService,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     this.brandService.getLatestBrands().subscribe({
//       next: (brands) => {
//         this.featuredProducersTemplate = brands;
//         this.cdr.detectChanges();
//       },
//       error: (err) => {
//         console.error('Error fetching brands:', err);
//       },
//     });
//   }
// }



import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FeaturedProducerCard } from '../featured-producer-card/featured-producer-card';
import { BrandDto, BrandService } from '../../../services/brand-service';

@Component({
  selector: 'app-featured-producers',
  imports: [FeaturedProducerCard],
  templateUrl: './featured-producers.html',
  styleUrl: './featured-producers.css',
})
export class FeaturedProducers implements OnInit {
  featuredProducersTemplate: BrandDto[] = [];

  constructor(
    private brandService: BrandService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  this.featuredProducersTemplate = [
    {
      id: '1',
      name: 'Canon',
      description: 'High quality cameras and lenses',
      image_path: '/images/canon.jpg',
      created_date: '2024-01-01',
    },
    {
      id: '2',
      name: 'Sony',
      description: 'Electronics and imaging solutions',
      image_path: '/images/sony.jpg',
      created_date: '2024-02-01',
    },
    {
      id: '3',
      name: 'Nikon',
      description: 'Optics and imaging products',
      image_path: '/images/nikon.jpg',
      created_date: '2024-03-01',
    },
  ];
}


}
