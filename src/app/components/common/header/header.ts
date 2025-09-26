import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  LucideAngularModule,
  Store,
  Heart,
  Info,
  User,
  ShoppingCart,
  Search,
  Menu,
  LucideIconData,
} from 'lucide-angular';
import { MenuItem } from '../../../interfaces/menu-item';
import { Router, RouterModule } from '@angular/router';
import { Coffee, Gift, Utensils, Apple } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [NgClass, ReactiveFormsModule, LucideAngularModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchForm: FormControl;

  menuItems: MenuItem[];
  searchIcon: LucideIconData;
  menuIcon: LucideIconData;
  categories: { name: string; route: string; icon: LucideIconData }[];
  storeIcon: LucideIconData;

  constructor(private router: Router) {
    this.searchForm = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.menuItems = [
      // {
      //   name: 'All bundles',
      //   icon: Store,
      //   route: 'shop',
      // },
      {
        name: 'About',
        icon: Info,
        route: 'about',
      },
      {
        name: 'Profile',
        icon: User,
        route: 'profile',
      },
      {
        name: 'My cart',
        icon: ShoppingCart,
        route: 'cart',
      },
    ];
    this.searchIcon = Search;
    this.menuIcon = Menu;

    this.categories = [
      { name: 'Abarrotes', route: 'abarrotes', icon: Apple },
      { name: 'Bebidas', route: 'bebidas', icon: Coffee },
      { name: 'Hogar', route: 'hogar', icon: Gift },
      { name: 'Electrodomésticos', route: 'electrodomesticos', icon: Utensils },
    ];

    this.storeIcon = Store;
  }

  onSearch() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
