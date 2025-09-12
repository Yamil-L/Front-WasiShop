import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces/menu-item';
import {
  LucideAngularModule,
  LogOut,
  Package,
  ShoppingBasket,
  CreditCard,
  User,
  MapPin,
} from 'lucide-angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [NgClass, RouterModule, LucideAngularModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  menuItems: MenuItem[];

  constructor(private router: Router) {
    this.menuItems = [
      {
        name: 'Profile',
        icon: User,
        route: 'me',
      },
      {
        name: 'Addresses',
        icon: MapPin,
        route: 'addresses',
      },
      {
        name: 'Subscriptions',
        icon: Package,
        route: 'subscriptions',
      },
      {
        name: 'Orders',
        icon: ShoppingBasket,
        route: 'orders',
      },
      { name: 'Pay methods', icon: CreditCard, route: 'payment' },
      {
        name: 'Log out',
        icon: LogOut,
      },
    ];
  }

  isActive(route: string): boolean {
    return this.router.url.toLowerCase().endsWith(`/${route.toLowerCase()}`);
  }

  handleClick(name: string) {
    if (name === 'Log out') {
      sessionStorage.removeItem('loggedIn');
      this.router.navigate(['/login']);
    }
  }
}
