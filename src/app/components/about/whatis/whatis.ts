// import { Component } from '@angular/core';
// import { AboutItem } from '../../../interfaces/about';
// import {
//   Recycle,
//   MapPin,
//   Shield,
//   Leaf,
//   Handshake,
//   BadgeCheck,
//   LucideAngularModule,
// } from 'lucide-angular';

// @Component({
//   selector: 'app-whatis',
//   imports: [LucideAngularModule],
//   templateUrl: './whatis.html',
//   styleUrl: './whatis.css',
// })
// export class Whatis {
//   aboutItems: AboutItem[];

//   constructor() {
//     this.aboutItems = [
//       {
//         name: 'Is Sustainable',
//         icon: Recycle,
//         description: 'Uses eco-friendly methods to protect the planet.',
//       },
//       {
//         name: 'Is Local',
//         icon: MapPin,
//         description: 'Partners with nearby farmers to reduce carbon footprint.',
//       },
//       {
//         name: 'Is Chemical-Free',
//         icon: Shield,
//         description: 'Grown without pesticides, herbicides, or GMOs.',
//       },
//       {
//         name: 'Is Fresh',
//         icon: Leaf,
//         description: 'Delivered quickly after harvest for maximum flavor.',
//       },
//       {
//         name: 'Is Ethical',
//         icon: Handshake,
//         description: 'Ensures fair labor and responsible sourcing.',
//       },
//       {
//         name: 'Is Certified Organic',
//         icon: BadgeCheck,
//         description: 'Meets rigorous organic farming standards.',
//       },
//     ];
//   }
// }



import { Component } from '@angular/core';
import { AboutItem } from '../../../interfaces/about';
import {
  ShoppingBag,
  Truck,
  CreditCard,
  Shield,
  Gift,
  BadgeCheck,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-whatis',
  imports: [LucideAngularModule],
  templateUrl: './whatis.html',
  styleUrl: './whatis.css',
})
export class Whatis {
  aboutItems: AboutItem[];

  constructor() {
    this.aboutItems = [
      {
        name: 'Variedad para todos',
        icon: ShoppingBag,
        description: 'Encuentra desde moda y tecnología hasta artículos para el hogar en un solo lugar.',
      },
      {
        name: 'Entrega rápida',
        icon: Truck,
        description: 'Recibe tus compras en la puerta de tu casa de manera segura y confiable.',
      },
      {
        name: 'Pagos fáciles',
        icon: CreditCard,
        description: 'Elige entre múltiples métodos de pago con total comodidad.',
      },
      {
        name: 'Compra segura',
        icon: Shield,
        description: 'Tus datos y transacciones están siempre protegidos.',
      },
      {
        name: 'Promociones exclusivas',
        icon: Gift,
        description: 'Aprovecha descuentos y ofertas especiales cada semana.',
      },
      {
        name: 'Garantía de confianza',
        icon: BadgeCheck,
        description: 'Respaldamos tus compras con garantía y servicio post-venta.',
      },
    ];
  }
}
