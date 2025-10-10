import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconData,
  Plus,
  Minus,
  Heart,
  Share2,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { Rating } from '../../common/rating/rating';
import { Comments } from '../../common/comments/comments';
import { Router } from '@angular/router';

interface Product {
  id: string;
  name: string;
  description?: string;
  unit?: string;
  price: number;
  discount_percent?: number;
  image_path?: string;
  averageRate?: number;
}
import { Header } from '../../../components/common/header/header';
import { Footer } from '../../../components/common/footer/footer';


@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [Header, Footer, CurrencyPipe, NgClass, LucideAngularModule, Rating, Comments],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell implements OnInit {
  product: Product | null = null;
  quantity = 1;
  isFavorite = false;

  plusIcon: LucideIconData = Plus;
  minusIcon: LucideIconData = Minus;
  heartIcon: LucideIconData = Heart;
  shareIcon: LucideIconData = Share2;
  linkIcon: LucideIconData = SquareArrowOutUpRight;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.['product'];

    if (!this.product) {
      const saved = sessionStorage.getItem('selectedProduct');
      if (saved) {
        this.product = JSON.parse(saved);
        console.log('🟢 Producto recuperado del sessionStorage:', this.product);
      } else {
        console.warn('⚠️ No se recibió producto.');
      }
    }

    // Aplicar valores por defecto
    if (this.product) {
      this.product = {
        id: this.product.id,
        name: this.product.name || 'Producto sin nombre',
        description: this.product.description || 'Sin descripción disponible.',
        unit: this.product.unit || 'unidad',
        price: this.product.price || 0,
        discount_percent: this.product.discount_percent ?? 0,
        image_path: this.product.image_path || 'assets/images/default.jpg',
        averageRate: this.product.averageRate ?? 4,
      };
    }
  }

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity++;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  
  
  get discountedPrice(): number {
    if (!this.product) return 0;
    const discount = this.product.discount_percent || 0;
    return this.product.price - (this.product.price * discount) / 100;
  }

  addToCart() {
  if (!this.product) return;

  // Leer carrito actual (si existe)
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  // Verificar si el producto ya está en el carrito
  const existingItem = cart.find((item: any) => item.id === this.product!.id);

  if (existingItem) {
    existingItem.quantity += this.quantity;
  } else {
    // Agregar producto completo al carrito
    cart.push({
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      discount_percent: this.product.discount_percent,
      image_path: this.product.image_path,
      quantity: this.quantity,
    });
  }

  // Guardar en localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('🛒 Carrito actualizado:', cart);

  // Feedback visual
  alert(`✅ ${this.product.name} agregado al carrito (${this.quantity})`);
}

}


