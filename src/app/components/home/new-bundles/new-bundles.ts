// import { Component } from '@angular/core';
// import { Bundle } from '../../../interfaces/bundle';
// import { NewBundleCard } from '../new-bundle-card/new-bundle-card';
// import { BundleService } from '../../../services/bundle-service';
// import { ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-new-bundles',
//   imports: [NewBundleCard],
//   templateUrl: './new-bundles.html',
//   styleUrl: './new-bundles.css',
// })
// export class NewBundles {
//   newBundles: (Bundle & { imageUrl: string })[] = [];

//   constructor(
//     private bundleService: BundleService,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit() {
//     this.bundleService.getLatestBundles().subscribe({
//       next: (bundles) => {
//         this.newBundles = bundles.map((bundle) => ({
//           ...bundle,
//           imageUrl: this.bundleService.getBundleImageUrl(bundle.id),
//         }));
//         this.cdr.detectChanges();
//       },
//       error: (err) => {
//         console.error('Error loading bundles:', err);
//       },
//     });
//   }
// }



import { Component } from '@angular/core';
import { Bundle } from '../../../interfaces/bundle';
import { NewBundleCard } from '../new-bundle-card/new-bundle-card';

@Component({
  selector: 'app-new-bundles',
  imports: [NewBundleCard],
  templateUrl: './new-bundles.html',
  styleUrl: './new-bundles.css',
})
export class NewBundles {
  newBundles: (Bundle & { imageUrl: string })[] = [
    {
      id: "1",
      name: 'Auriculares Inalámbricos Pro',
      description: 'Sonido envolvente con batería de larga duración.',
      discount_percent: 5,
      created_date: '2025-02-01',
      imageUrl: '/images/auriculares.jpg',
    },
    {
      id: "2",
      name: 'Camiseta Edición Especial',
      description: 'Camiseta 100% algodón con estampado exclusivo.',
      discount_percent: 0,
      created_date: '2025-02-10',
      imageUrl: '/images/camiseta.jpeg',
    },
    {
      id: "3",
      name: 'Figura Coleccionable',
      description: 'Figura de edición limitada para coleccionistas.',
      discount_percent: 15,
      created_date: '2025-03-01',
      imageUrl: '/images/figura.jpg',
    },
    {
      id: "4",
      name: 'Mochila de Viaje',
      description: 'Mochila resistente y cómoda, ideal para viajes.',
      discount_percent: 0,
      created_date: '2025-03-10',
      imageUrl: '/images/mochila.jpg',
    },
  ];
}
