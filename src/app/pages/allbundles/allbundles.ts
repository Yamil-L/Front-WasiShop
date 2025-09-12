import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';
import { NewBundleCard } from '../../components/home/new-bundle-card/new-bundle-card';
import { BundleService } from '../../services/bundle-service';
import { Bundle } from '../../interfaces/bundle';

@Component({
  selector: 'app-allbundles',
  standalone: true,
  imports: [Header, Footer, NewBundleCard],
  templateUrl: './allbundles.html',
  styleUrl: './allbundles.css',
})
export class Allbundles implements OnInit {
  newBundles: (Bundle & { imageUrl: string })[] = [];

  constructor(
    private bundleService: BundleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.bundleService.getAll().subscribe((bundles) => {
      this.newBundles = bundles.map((bundle) => ({
        ...bundle,
        imageUrl: this.bundleService.getBundleImageUrl(bundle.id),
      }));
      this.cdr.detectChanges();
    });
  }
}
