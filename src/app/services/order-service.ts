// src/app/services/order.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductInOrder {
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
}

export interface OrderRow {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  product: ProductInOrder;
}

export interface OrderDto {
  id: string;
  user_id: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  line_1: string;
  line_2: string;
  number: string;
  delivery: string;
  created_at: string;
  order_rows: OrderRow[];
}

export interface CreateOrderPayload {
  user_id: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  line_1: string;
  line_2?: string;
  number: string;
  delivery: string;
  order_rows: {
    product_id: string;
    quantity: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly baseUrl = 'https://orgfoodbe-production.up.railway.app';

  constructor(private http: HttpClient) {}

  createOrder(payload: CreateOrderPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders`, payload, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  }

  getOrdersByUser(userId: string): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${this.baseUrl}/orders/${userId}`, {
      withCredentials: true,
    });
  }
}
