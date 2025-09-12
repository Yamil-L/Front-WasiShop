// src/app/services/subscription-service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SubscriptionPayload {
  addressId: string;
  bundleId: string;
  paymentMethodId: string;
  delivery: number;
}

export interface Subscription {
  id: string;
  bundle_id: string;
  address_id: string;
  payment_method_id: string;
  delivery: number;
}

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private baseUrl = 'https://orgfoodbe-production.up.railway.app/subcscription';

  constructor(private http: HttpClient) {}

  subscribe(payload: SubscriptionPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/subscribe`, payload, {
      withCredentials: true,
    });
  }

  getSubscriptionsByUser(
    userId: string
  ): Observable<{ subscriptions: Subscription[] }> {
    return this.http.get<{ subscriptions: Subscription[] }>(
      `${this.baseUrl}/user/${userId}`,
      { withCredentials: true }
    );
  }

  unsubscribe(subscriptionId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/unsubscribe/${subscriptionId}`, {
      withCredentials: true,
    });
  }

  updateSubscription(
    id: string,
    payload: { addressId: string; delivery: number; paymentMethodId: string }
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, payload, {
      withCredentials: true,
    });
  }
}
