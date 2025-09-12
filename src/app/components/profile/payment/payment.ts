import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  PaymentMethodService,
  PaymentMethodDto,
} from '../../../services/payment-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment implements OnInit {
  paymentMethods: PaymentMethodDto[] = [];
  @ViewChild('addModal') addModalRef!: ElementRef<HTMLDialogElement>;
  private paymentService = inject(PaymentMethodService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.paymentService.getAllByUser(userId).subscribe({
      next: (methods) => {
        this.paymentMethods = methods;
        this.cdr.detectChanges();
      },
    });
  }

  addPaymentMethod() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    const randomLast4 = Math.floor(1000 + Math.random() * 9000).toString();
    const brands = ['Visa', 'MasterCard', 'Amex'];
    const payload = {
      user_id: userId,
      card_holder_name: 'Generated Name',
      card_brand: brands[Math.floor(Math.random() * brands.length)],
      exp_month: Math.floor(Math.random() * 12) + 1,
      exp_year: 25 + Math.floor(Math.random() * 5),
      card_last4: randomLast4,
    };

    this.paymentService
      .addPaymentMethod(userId, payload)
      .subscribe(() => this.ngOnInit());
  }

  deletePaymentMethod(id: string) {
    this.paymentService.deletePaymentMethod(id).subscribe({
      next: () => {
        this.paymentMethods = this.paymentMethods.filter(
          (method) => method.id !== id
        );
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Error deleting payment method:', err);
      },
    });
  }

  openAddModal() {
    this.addModalRef.nativeElement.showModal();
  }
}
