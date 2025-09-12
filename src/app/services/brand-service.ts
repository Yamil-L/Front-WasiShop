// src/app/services/brand-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BrandDto {
  id: string;
  name: string;
  description: string;
  image_path: string;
  created_date: string;
}

export interface SocialDto {
  id: string;
  url: string;
  brand_id: string;
}

@Injectable({ providedIn: 'root' })
export class BrandService {
  private baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getBrandById(id: string): Observable<BrandDto> {
    return this.http.get<BrandDto>(`${this.baseUrl}/brand/${id}`, {
      withCredentials: true,
    });
  }

  getSocialsByBrandId(brandId: string): Observable<SocialDto[]> {
    return this.http.get<SocialDto[]>(`${this.baseUrl}/social/all/${brandId}`, {
      withCredentials: true,
    });
  }

  getBrandImageUrl(id: string): string {
    return `${this.baseUrl}/brand/${id}/image`;
  }

  getLatestBrands(): Observable<BrandDto[]> {
    return this.http.get<BrandDto[]>(`${this.baseUrl}/brand/latest`, {
      withCredentials: true,
    });
  }
}
