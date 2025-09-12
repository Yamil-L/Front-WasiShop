import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  unit: string;
  discount_percent: number;
  bundle_id: string;
  brand_id: string;
  image_path: string;
  created_date: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getProductById(productId: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.baseUrl}/product/${productId}`, {
      withCredentials: true,
    });
  }

  getProductImageUrl(productId: string): string {
    return `${this.baseUrl}/product/${productId}/image`;
  }

  getAll(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.baseUrl}/product`, {
      withCredentials: true,
    });
  }
}
