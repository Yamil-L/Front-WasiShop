import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Grid, List, Filter, Star, LucideIconData } from 'lucide-angular';
import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  discount?: number;
}

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [Header, Footer,NgClass, LucideAngularModule, FormsModule],
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})
export class Categoria implements OnInit {
  categoryRoute: string = '';
  categoryName: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isGridView: boolean = true;
  sortBy: string = 'name';
  selectedPriceRange: string = 'all';

  // Icons
  gridIcon: LucideIconData = Grid;
  listIcon: LucideIconData = List;
  filterIcon: LucideIconData = Filter;
  starIcon: LucideIconData = Star;

  // Filter options
  priceRanges = [
    { label: 'Todos los precios', value: 'all' },
    { label: 'Menos de S/ 50', value: '0-50' },
    { label: 'S/ 50 - S/ 100', value: '50-100' },
    { label: 'S/ 100 - S/ 200', value: '100-200' },
    { label: 'Más de S/ 200', value: '200+' }
  ];

  sortOptions = [
    { label: 'Nombre A-Z', value: 'name' },
    { label: 'Precio menor a mayor', value: 'price-asc' },
    { label: 'Precio mayor a menor', value: 'price-desc' },
    { label: 'Mejor valorados', value: 'rating' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryRoute = params['category'];
      this.setCategoryName();
      this.loadProducts();
    });
  }

  setCategoryName() {
    const categoryMap: { [key: string]: string } = {
      'abarrotes': 'Abarrotes',
      'bebidas': 'Bebidas',
      'hogar': 'Hogar',
      'electrodomesticos': 'Electrodomésticos'
    };
    this.categoryName = categoryMap[this.categoryRoute] || 'Categoría';
  }

  loadProducts() {
    // Simular carga de productos según la categoría
    // En un caso real, harías una llamada a un servicio
    this.products = this.getMockProducts();
    this.filteredProducts = [...this.products];
    this.applySorting();
  }

  getMockProducts(): Product[] {
    // Productos de ejemplo según la categoría
    const productsByCategory: { [key: string]: Product[] } = {
      'abarrotes': [
        {
          id: '1',
          name: 'Arroz Extra 5kg',
          price: 25.90,
          originalPrice: 28.90,
          image: 'https://via.placeholder.com/300x300?text=Arroz',
          rating: 4.5,
          reviews: 120,
          description: 'Arroz extra de primera calidad',
          discount: 10
        },
        {
          id: '2',
          name: 'Aceite Primor 1L',
          price: 8.50,
          image: 'https://via.placeholder.com/300x300?text=Aceite',
          rating: 4.2,
          reviews: 85,
          description: 'Aceite vegetal premium'
        },
        {
          id: '3',
          name: 'Azúcar Blanca 1kg',
          price: 4.20,
          image: 'https://via.placeholder.com/300x300?text=Azucar',
          rating: 4.0,
          reviews: 65,
          description: 'Azúcar blanca refinada'
        }
      ],
      'bebidas': [
        {
          id: '4',
          name: 'Coca Cola 2L',
          price: 6.50,
          image: 'https://via.placeholder.com/300x300?text=Coca+Cola',
          rating: 4.3,
          reviews: 200,
          description: 'Bebida gaseosa clásica'
        },
        {
          id: '5',
          name: 'Agua San Luis 2.5L',
          price: 3.80,
          image: 'https://via.placeholder.com/300x300?text=Agua',
          rating: 4.1,
          reviews: 150,
          description: 'Agua mineral natural'
        }
      ],
      'hogar': [
        {
          id: '6',
          name: 'Detergente Ariel 1kg',
          price: 12.90,
          originalPrice: 15.90,
          image: 'https://via.placeholder.com/300x300?text=Detergente',
          rating: 4.4,
          reviews: 90,
          description: 'Detergente en polvo concentrado',
          discount: 20
        }
      ],
      'electrodomesticos': [
        {
          id: '7',
          name: 'Licuadora Oster',
          price: 180.00,
          originalPrice: 220.00,
          image: 'https://via.placeholder.com/300x300?text=Licuadora',
          rating: 4.6,
          reviews: 45,
          description: 'Licuadora de 3 velocidades',
          discount: 18
        }
      ]
    };

    return productsByCategory[this.categoryRoute] || [];
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  onSortChange() {
    this.applySorting();
  }

  onPriceRangeChange() {
    this.applyFilters();
  }

  applySorting() {
    switch (this.sortBy) {
      case 'name':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        this.filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  applyFilters() {
    let filtered = [...this.products];

    if (this.selectedPriceRange !== 'all') {
      const [min, max] = this.selectedPriceRange.split('-').map(v => 
        v === '+' ? Infinity : parseFloat(v)
      );
      
      filtered = filtered.filter(product => {
        if (this.selectedPriceRange === '200+') {
          return product.price > 200;
        }
        return product.price >= min && product.price <= max;
      });
    }

    this.filteredProducts = filtered;
    this.applySorting();
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  generateStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < Math.floor(rating));
  }
}