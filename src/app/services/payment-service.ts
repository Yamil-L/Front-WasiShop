// src/app/services/payment-method.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PaymentMethodDto {
  id: string;
  user_id: string;
  card_holder_name: string;
  card_brand: string;
  exp_month: number;
  exp_year: number;
  card_last4: string;
}

export type PaymentMethodPayload = Omit<PaymentMethodDto, 'id'>;

@Injectable({ providedIn: 'root' })
export class PaymentMethodService {
  private baseUrl =
    'https://orgfoodbe-production.up.railway.app/payment-method';

  constructor(private http: HttpClient) {}

  getAllByUser(userId: string): Observable<PaymentMethodDto[]> {
    return this.http.get<PaymentMethodDto[]>(`${this.baseUrl}/all/${userId}`, {
      withCredentials: true,
    });
  }

  addPaymentMethod(
    userId: string,
    payload: PaymentMethodPayload
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/${userId}`, payload, {
      withCredentials: true,
    });
  }

  deletePaymentMethod(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
