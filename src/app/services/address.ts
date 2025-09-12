import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AddressDto {
  id: string;
  user_id: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  line_1: string;
  line_2?: string;
  number: number;
}

export interface AddressPayload {
  country: string;
  state: string;
  city: string;
  postal_code?: string;
  line_1: string;
  line_2?: string;
  number: number;
}

@Injectable({
  providedIn: 'root',
})
export class Address {
  private readonly baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getAddressesByUserId(userId: string): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(
      `${this.baseUrl}/address/all/${userId}`,
      {
        withCredentials: true,
      }
    );
  }

  updateAddress(id: string, data: Partial<AddressDto>): Observable<any> {
    return this.http.put(`${this.baseUrl}/address/${id}`, data, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteAddress(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/address/${id}`, {
      withCredentials: true,
    });
  }

  createAddress(userId: string, data: AddressPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/address/${userId}`, data, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  getAddressById(id: string): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.baseUrl}/address/${id}`, {
      withCredentials: true,
    });
  }
}
