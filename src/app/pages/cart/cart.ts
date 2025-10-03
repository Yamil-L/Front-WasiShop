import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ProductService, ProductDto } from '../../services/product-service';
import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import {
  PaymentMethodService,
  PaymentMethodDto,
} from '../../services/payment-service';
import { Address as AddressService, AddressDto } from '../../services/address';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  OrderService,
  CreateOrderPayload,
  OrderRow,
} from '../../services/order-service';

interface CartItem {
  id: string;
  quantity: number;
  product?: ProductDto;
  imageUrl?: string;
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

  paymentMethods: PaymentMethodDto[] = [];
  addresses: AddressDto[] = [];

  selectedPaymentMethodId: string = '';
  selectedAddressId: string = '';
  deliveryDate: string | null = null;

  @ViewChild('checkoutModal') checkoutModalRef!: ElementRef<HTMLDialogElement>;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
    private paymentService: PaymentMethodService,
    private addressService: AddressService,
    private orderService: OrderService,
    private router: Router
  ) {}

  
  openCheckoutModal() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

  

    this.checkoutModalRef.nativeElement.showModal();
  }
  
/*
  
  openCheckoutModal() {
  // ⚠️ Omitir validación de userId mientras pruebas
  this.paymentService.getAllByUser("fake-user").subscribe((methods) => {
    this.paymentMethods = methods;
    this.cdr.detectChanges();
  });

  this.addressService.getAddressesByUserId("fake-user").subscribe((addresses) => {
    this.addresses = addresses;
    this.cdr.detectChanges();
  });

  this.checkoutModalRef.nativeElement.showModal();
}
*/

  ngOnInit(): void {
    const raw = localStorage.getItem('cart');
    if (!raw) return;

    const items: CartItem[] = JSON.parse(raw);

    Promise.all(
      items.map(async (item) => {
        const product = await this.productService
          .getProductById(item.id)
          .toPromise();
        item.product = product!;
        item.imageUrl = this.productService.getProductImageUrl(item.id);
      })
    ).then(() => {
      this.cartItems = items;
      this.cdr.detectChanges();
    });
  }

  removeFromCart(id: string): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    localStorage.setItem(
      'cart',
      JSON.stringify(
        this.cartItems.map(({ id, quantity }) => ({ id, quantity }))
      )
    );
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      const price = item.product!.price;
      const discount = item.product!.discount_percent || 0;
      const finalPrice = price - (price * discount) / 100;
      return total + finalPrice * item.quantity;
    }, 0);
  }

  orderCompleted = false;



confirmOrder(event?: Event) {
  // Prevenir comportamiento por defecto si es un evento de formulario
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Cerrar modal
  if (this.checkoutModalRef) {
    this.checkoutModalRef.nativeElement.close();
  }

  // Mostrar notificación
  this.orderCompleted = true;
  this.cdr.detectChanges();

  // Ocultar después de 3 segundos
  setTimeout(() => {
    this.orderCompleted = false;
    this.cdr.detectChanges();
    this.router.navigate(['/']);
  }, 700);
}


}
