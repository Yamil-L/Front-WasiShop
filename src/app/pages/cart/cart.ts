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
import { CurrencyPipe } from '@angular/common';
import {
  PaymentMethodService,
  PaymentMethodDto,
} from '../../services/payment-service';
import { Address as AddressService, AddressDto } from '../../services/address';
import { FormsModule } from '@angular/forms';
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
  imports: [Header, Footer, CurrencyPipe, FormsModule],
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
    private orderService: OrderService
  ) {}

  openCheckoutModal() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.paymentService.getAllByUser(userId).subscribe((methods) => {
      this.paymentMethods = methods;
      this.cdr.detectChanges();
    });

    this.addressService.getAddressesByUserId(userId).subscribe((addresses) => {
      this.addresses = addresses;
      this.cdr.detectChanges();
    });

    this.checkoutModalRef.nativeElement.showModal();
  }

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

  confirmOrder() {
    const userId = sessionStorage.getItem('userId');
    const selectedAddress = this.addresses.find(
      (a) => a.id === this.selectedAddressId
    );

    if (!userId || !selectedAddress || !this.deliveryDate) return;

    const payload: CreateOrderPayload = {
      user_id: userId,
      country: selectedAddress.country,
      state: selectedAddress.state,
      city: selectedAddress.city,
      postal_code: selectedAddress.postal_code,
      line_1: selectedAddress.line_1,
      line_2: selectedAddress.line_2 || '',
      number: selectedAddress.number.toString(),
      delivery: new Date(this.deliveryDate).toISOString(),
      order_rows: this.cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    this.orderService.createOrder(payload).subscribe({
      next: () => {
        console.log('✅ Order submitted successfully');
        localStorage.removeItem('cart');
        this.cartItems = [];
        this.checkoutModalRef.nativeElement.close();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Order failed', err);
      },
    });
  }
}
