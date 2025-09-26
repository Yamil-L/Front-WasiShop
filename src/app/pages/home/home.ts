import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { FeaturedProducts } from '../../components/home/featured-products/featured-products';
import { FeaturedProducers } from '../../components/home/featured-producers/featured-producers';
import { About } from '../../components/home/about/about';
import { NewBundles } from '../../components/home/new-bundles/new-bundles';
import { Footer } from '../../components/common/footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    FeaturedProducts,
    FeaturedProducers,
    About,
    NewBundles,
    Footer,
    FormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
// --- Filtros ---
  minPrice: number = 0;
  maxPrice: number = 1000;
  rangeMin: number = 0;
  rangeMax: number = 1000;

  brands = [
    { name: 'Marca A', selected: false },
    { name: 'Marca B', selected: false },
    { name: 'Marca C', selected: false },
  ];

  ratings = [
    { label: '★ o más', value: 1 },
    { label: '★★ o más', value: 2 },
    { label: '★★★ o más', value: 3 },
    { label: '★★★★ o más', value: 4 },
    { label: '★★★★★', value: 5 },
  ];

  selectedRating: number | null = null;

  categories = ['Electrónica', 'Ropa', 'Hogar', 'Juguetes', 'Deportes'];
  selectedCategory: string = '';

  sortOrder: string = 'relevance';

  // --- Métodos estáticos (sin lógica aún) ---
  emitFilters(): void {
    console.log('Filtros actuales:', {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      brands: this.brands.filter(b => b.selected).map(b => b.name),
      rating: this.selectedRating,
      category: this.selectedCategory,
      sortOrder: this.sortOrder
    });
  }

  clear(): void {
    this.minPrice = this.rangeMin;
    this.maxPrice = this.rangeMax;
    this.brands.forEach(b => b.selected = false);
    this.selectedRating = null;
    this.selectedCategory = '';
    this.sortOrder = 'relevance';
    this.emitFilters();
  }
}
