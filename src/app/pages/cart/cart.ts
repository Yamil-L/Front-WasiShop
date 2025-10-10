import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  discount_percent?: number;
  image_path?: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [Header, Footer, CurrencyPipe, FormsModule, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartItems: CartItem[] = [];
  orderCompleted = false;

  @ViewChild('checkoutModal') checkoutModalRef!: ElementRef<HTMLDialogElement>;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      console.log('🟢 Carrito cargado:', this.cartItems);
    } else {
      console.warn('🟠 Carrito vacío.');
    }
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  removeFromCart(id: string): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      const discount = item.discount_percent || 0;
      const finalPrice = item.price - (item.price * discount) / 100;
      return total + finalPrice * item.quantity;
    }, 0);
  }

  openCheckoutModal() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;
    this.checkoutModalRef.nativeElement.showModal();
  }

  confirmOrder(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.checkoutModalRef.nativeElement.close();
    this.orderCompleted = true;
    this.cdr.detectChanges();


    // Obtener carrito actual
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (cart.length > 0) {
    // Crear nueva orden
    const newOrder = {
    id: Date.now(),
    date: new Date().toISOString(),
    total: cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
    address: 'Online Store, Lima - Perú', // 👈 puedes cambiarlo dinámicamente si tienes direcciones
    order_rows: cart.map((item: any) => ({
      product: {
        id: item.id,
        name: item.name,
        image_path: item.image_path || '/images/default.jpg',
        price: item.price,
      },
      quantity: item.quantity,
    })),
  };

    // Guardar en localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    savedOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(savedOrders));

    console.log('✅ Orden guardada:', newOrder);


  }

  
    setTimeout(() => {
      this.orderCompleted = false;
      this.cdr.detectChanges();
      this.router.navigate(['/']);
      localStorage.removeItem('cart');
    }, 700);
  }
}
