import { AddressPipe } from './../../../pipes/address-pipe';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderService, OrderDto } from '../../../services/order-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orders: OrderDto[] = [];

  constructor(
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.orderService.getOrdersByUser(userId).subscribe((orders) => {
      this.orders = orders;
      this.cdr.detectChanges();
    });
  }

  groupOrdersByAddress(): Map<string, OrderDto[]> {
    const grouped = new Map<string, OrderDto[]>();

    for (const order of this.orders) {
      const addressKey = `${order.line_1}, ${order.city}, ${order.state}`;
      if (!grouped.has(addressKey)) {
        grouped.set(addressKey, []);
      }
      grouped.get(addressKey)!.push(order);
    }

    return grouped;
  }
}
