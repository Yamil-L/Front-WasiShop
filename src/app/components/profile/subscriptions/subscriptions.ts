import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AddressPipe } from '../../../pipes/address-pipe';
import { CurrencyPipe } from '@angular/common';
import { SubscriptionService } from '../../../services/subscription-service';
import {
  AddressDto,
  Address as AddressService,
} from '../../../services/address';
import { BundleDto, BundleService } from '../../../services/bundle-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

export interface Subscription {
  id: string;
  bundle_id: string;
  address_id: string;
  payment_method_id: string;
  delivery: number;
}

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [AddressPipe, CurrencyPipe, FormsModule],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.css',
})
export class Subscriptions implements OnInit {
  private subscriptionService = inject(SubscriptionService);
  private addressService = inject(AddressService);
  private bundleService = inject(BundleService);
  private cdr = inject(ChangeDetectorRef);

  grouped: {
    address: AddressDto;
    subscriptions: (Subscription & { bundle: BundleDto })[];
  }[] = [];

  selectedSubscription!: Subscription;
  selectedAddressId = '';
  deliveryDay = 1;
  addresses: AddressDto[] = [];

  openManageModal(subscription: Subscription & { bundle: any }) {
    this.selectedSubscription = subscription;
    this.selectedAddressId = subscription.address_id;
    this.deliveryDay = subscription.delivery;
    (document.getElementById('manageModal') as HTMLDialogElement).showModal();
  }

  confirmUpdate() {
    const payload = {
      addressId: this.selectedAddressId,
      paymentMethodId: this.selectedSubscription.payment_method_id, // NO editable
      delivery: this.deliveryDay,
    };

    this.subscriptionService
      .updateSubscription(this.selectedSubscription.id, payload)
      .subscribe(() => {
        this.cdr.detectChanges();
      });

    (document.getElementById('manageModal') as HTMLDialogElement).close();
  }

  cancelSubscription(subscriptionId: string) {
    this.subscriptionService.unsubscribe(subscriptionId).subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    const userID = sessionStorage.getItem('userId');

    this.subscriptionService.getSubscriptionsByUser(userID!).subscribe({
      next: (res) => {
        const subs = res.subscriptions;
        const addressMap = new Map<string, AddressDto>();
        const bundleMap = new Map<string, BundleDto>();

        const uniqueAddressIds = [...new Set(subs.map((s) => s.address_id))];
        const uniqueBundleIds = [...new Set(subs.map((s) => s.bundle_id))];

        Promise.all([
          Promise.all(
            uniqueAddressIds.map((id) =>
              this.addressService.getAddressById(id).toPromise()
            )
          ),
          Promise.all(
            uniqueBundleIds.map((id) =>
              this.bundleService.getBundleById(id).toPromise()
            )
          ),
        ]).then(([addresses, bundles]) => {
          addresses.forEach((a) => addressMap.set(a!.id, a!));
          bundles.forEach((b) => bundleMap.set(b!.id, b!));

          const byAddress = new Map<
            string,
            (Subscription & { bundle: BundleDto })[]
          >();

          for (const sub of subs) {
            const bundle = bundleMap.get(sub.bundle_id);
            if (!bundle) continue;

            const enhancedSub = { ...sub, bundle };
            const arr = byAddress.get(sub.address_id) ?? [];
            arr.push(enhancedSub);
            byAddress.set(sub.address_id, arr);
          }

          this.grouped = [...byAddress.entries()].map(
            ([addressId, subscriptions]) => ({
              address: addressMap.get(addressId)!,
              subscriptions,
            })
          );
          this.addressService
            .getAddressesByUserId(sessionStorage.getItem('userId')!)
            .subscribe({
              next: (res) => {
                this.addresses = res;
              },
              error: (err) => {
                console.error('Error fetching addresses:', err);
              },
            });
          this.cdr.detectChanges();
        });
      },
    });
  }

  @ViewChild('manageModal') manageModalRef!: ElementRef<HTMLDialogElement>;

  closeManageModal() {
    this.manageModalRef.nativeElement.close();
  }
}
