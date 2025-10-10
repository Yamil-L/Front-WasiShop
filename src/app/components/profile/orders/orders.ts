// import { AddressPipe } from './../../../pipes/address-pipe';
// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { OrderService, OrderDto } from '../../../services/order-service';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-orders',
//   standalone: true,
//   imports: [DatePipe],
//   templateUrl: './orders.html',
//   styleUrl: './orders.css',
// })
// export class Orders implements OnInit {
//   orders: OrderDto[] = [];

//   constructor(
//     private orderService: OrderService,
//     private cdr: ChangeDetectorRef
//   ) {}



//   ngOnInit(): void {
//   const savedOrders = localStorage.getItem('orders');
//   if (savedOrders) {
//     this.orders = JSON.parse(savedOrders);
//     console.log('📦 Órdenes cargadas:', this.orders);
//   } else {
//     console.warn('🟠 No hay órdenes registradas.');
//   }
//   this.cdr.detectChanges();
// }



//   groupOrdersByAddress(): Map<string, OrderDto[]> {
//     const grouped = new Map<string, OrderDto[]>();

//     for (const order of this.orders) {
//       const addressKey = `${order.line_1}, ${order.city}, ${order.state}`;
//       if (!grouped.has(addressKey)) {
//         grouped.set(addressKey, []);
//       }
//       grouped.get(addressKey)!.push(order);
//     }

//     return grouped;
//   }
// }


import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orders: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const storedOrders = localStorage.getItem('orders');
    this.orders = storedOrders ? JSON.parse(storedOrders) : [];
    this.cdr.detectChanges();
  }

  groupOrdersByAddress(): Map<string, any[]> {
    const grouped = new Map<string, any[]>();

    for (const order of this.orders) {
      const addressKey = order.address || 'Unknown Address';
      if (!grouped.has(addressKey)) {
        grouped.set(addressKey, []);
      }
      grouped.get(addressKey)!.push(order);
    }

    return grouped;
  }
}
