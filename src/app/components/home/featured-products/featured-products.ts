import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  LucideIconData,
} from 'lucide-angular';
import { FeaturedProductCard } from '../featured-product-card/featured-product-card';
import { HttpClient } from '@angular/common/http';

interface ProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  discount_percent: number;
  created_date: string;
  sku: string;
  unit: string;
  bundle_id: string;
  brand_id: string;
  image_path: string;
}

@Component({
  selector: 'app-featured-products',
  imports: [FeaturedProductCard, LucideAngularModule],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts implements OnInit {
  leftIcon: LucideIconData = ChevronLeft;
  rightIcon: LucideIconData = ChevronRight;

  itemsPerGroup = 3;
  products: ProductDto[] = [];

  private baseUrl = 'http://157.180.74.224:3000/api/productos';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log('🚀 FeaturedProducts component initialized');
    this.loadProducts();
    console.log('📦 Productos actuales:', this.products);
    this.setupBreakpointObserver();
  }

  private async loadProducts(): Promise<void> {
    console.log('⏳ Cargando productos...');
    try {
      const data = await this.http
        .get<any[]>(this.baseUrl, {
          headers: { 'x-tenant-id': 'cliente-1' },
        })
        .toPromise(); // Convertimos el Observable a una Promise
      console.log('✅ Productos cargados:', data);
      // 🔹 Mapeamos la respuesta de la API al ProductDto esperado
      this.products = (data ?? []).map((p) => {
      // Normalizamos el nombre para usarlo en la ruta del archivo
      const cleanName = p.descripcion
        ?.toLowerCase()
        .replace(/\s+/g, '-')        // espacios → guiones
        .replace(/[^a-z0-9\-]/g, ''); // quitamos caracteres especiales

      return {
        id: p._id,
        name: p.descripcion, // usamos descripcion como nombre
        description: p.categoria,
        price: p.precio,
        discount_percent: 0,
        created_date: p.createdAt,
        sku: p.contenedor ?? '',
        unit: 'pcs',
        bundle_id: '',
        brand_id: '',
        // 🔹 Aquí concatenamos el nombre limpio a la ruta base
        image_path: `/img/${cleanName || 'default'}.jpeg`,
      };
    });
      this.cdr.markForCheck();
    } catch (err) {
      console.error('❌ Error cargando productos:', err);
    }
  }

  private setupBreakpointObserver(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 740px)',
        '(max-width: 1050px)',
        '(max-width: 1440px)',
      ])
      .subscribe((state) => {
        if (state.breakpoints['(max-width: 740px)']) {
          this.itemsPerGroup = 1;
        } else if (state.breakpoints['(max-width: 1050px)']) {
          this.itemsPerGroup = 2;
        } else if (state.breakpoints['(max-width: 1440px)']) {
          this.itemsPerGroup = 3;
        } else {
          this.itemsPerGroup = 4;
        }
        this.cdr.markForCheck();
      });
  }

  featuredProductsInGroups(groupSize: number): ProductDto[][] {
    const groups: ProductDto[][] = [];
    for (let i = 0; i < this.products.length; i += groupSize) {
      groups.push(this.products.slice(i, i + groupSize));
    }
    return groups;
  }
}
