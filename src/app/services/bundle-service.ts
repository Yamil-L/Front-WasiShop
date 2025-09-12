import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bundle } from '../interfaces/bundle';

export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: string;
  unit: string;
  discount_percent: number;
  bundle_id: string;
  brand_id: string;
  image_path: string;
  created_date: string;
  averageRate?: number; // mock o calculado si no llega
}

export interface ProductQuantity {
  product: Product;
  quantity: number;
}

export interface BundleDto {
  id: string;
  name: string;
  description: string;
  discount_percent: number;
  image_path: string;
  created_date: string;
  price?: number;
  products?: ProductQuantity[];
}

@Injectable({ providedIn: 'root' })
export class BundleService {
  private readonly baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getLatestBundles(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(`${this.baseUrl}/bundle/latest`, {
      withCredentials: true,
    });
  }

  getBundleById(id: string): Observable<BundleDto> {
    return this.http.get<BundleDto>(`${this.baseUrl}/bundle/${id}`, {
      withCredentials: true,
    });
  }

  getBundleImageUrl(id: string): string {
    return `${this.baseUrl}/bundle/${id}/image`;
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/product`, {
      withCredentials: true,
    });
  }

  getAll(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(`${this.baseUrl}/bundle`, {
      withCredentials: true,
    });
  }
}
