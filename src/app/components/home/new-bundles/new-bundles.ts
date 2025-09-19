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



import { Component, OnInit } from '@angular/core';
import { DynamicBundle } from '../../../interfaces/dynamic-bundle';
import { NewBundleCard } from '../new-bundle-card/new-bundle-card';
import { App2BundleService } from '../../../services/app2-bundle.service';

@Component({
  selector: 'app-new-bundles',
  imports: [NewBundleCard],
  templateUrl: './new-bundles.html',
  styleUrl: './new-bundles.css',
})
export class NewBundles implements OnInit {
  newBundles: DynamicBundle[] = [];

  constructor(private app2BundleService: App2BundleService) {}

  ngOnInit() {
    this.app2BundleService.getBundles().subscribe({
      next: (data) => {
        // productos exclusivos app2
        const exclusivos: DynamicBundle[] = [
          {
            id: "local-1",
            name: 'Producto Exclusivo App2',
            description: 'Solo visible en la app2',
            discount_percent: 0,
            created_date: '2025-09-18',
            imageUrl: '/images/app2-only.jpg',
          }
        ];

        // mezclar API + exclusivos
        this.newBundles = [...data, ...exclusivos];
      },
      error: (err) => {
        console.error('Error cargando bundles en app2:', err);
      }
    });
  }
}
