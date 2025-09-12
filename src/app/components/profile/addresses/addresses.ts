import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AddressPipe } from '../../../pipes/address-pipe';
import {
  Address as AddressService,
  AddressDto,
  AddressPayload,
} from '../../../services/address';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  imports: [AddressPipe, FormsModule],
  templateUrl: './addresses.html',
  styleUrl: './addresses.css',
})
export class Addresses {
  addresses: AddressDto[] = [];
  selectedAddress: AddressDto | null = null;
  isEditing: boolean = false;

  @ViewChild('editModal') editModalRef!: ElementRef<HTMLDialogElement>;
  @ViewChild('deleteModal') deleteModalRef!: ElementRef<HTMLDialogElement>;

  constructor(
    private addressService: AddressService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.selectedAddress = {
      id: '',
      user_id: '',
      country: '',
      state: '',
      city: '',
      postal_code: '',
      line_1: '',
      line_2: '',
      number: 0,
    };

    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.addressService.getAddressesByUserId(userId).subscribe({
      next: (addresses) => {
        this.addresses = addresses;
        this.cdr.detectChanges();
      },
      error: () => {},
    });
  }

  openEditModal(address: AddressDto) {
    this.isEditing = true;
    this.selectedAddress = {
      ...address,
      line_2: address.line_2 || '',
      postal_code: address.postal_code || '',
    };
    this.editModalRef.nativeElement.showModal();
  }

  openDeleteModal(address: AddressDto) {
    this.selectedAddress = address;
    this.deleteModalRef.nativeElement.showModal();
  }

  saveEdit() {
    if (!this.selectedAddress) return;

    const {
      id,
      user_id,
      country,
      state,
      city,
      number,
      line_1,
      line_2,
      postal_code,
    } = this.selectedAddress;

    const payload: AddressPayload = {
      country,
      state,
      city,
      number,
      line_1,
    };

    if (line_2?.trim()) payload.line_2 = line_2;
    if (postal_code?.trim()) payload.postal_code = postal_code;

    const request$ = this.isEditing
      ? this.addressService.updateAddress(id, payload)
      : this.addressService.createAddress(user_id, payload);

    request$.subscribe({
      next: () => {
        this.editModalRef.nativeElement.close();
        this.ngOnInit();
      },
      error: () => {},
    });
  }

  confirmDelete() {
    if (!this.selectedAddress) return;

    this.addressService.deleteAddress(this.selectedAddress.id).subscribe({
      next: () => {
        this.deleteModalRef.nativeElement.close();
        this.ngOnInit();
      },
      error: () => {},
    });
  }

  openAddModal() {
    this.isEditing = false;
    const userId = sessionStorage.getItem('userId') || '';
    this.selectedAddress = {
      id: '',
      user_id: userId,
      country: '',
      state: '',
      city: '',
      postal_code: '',
      line_1: '',
      line_2: '',
      number: 0,
    };
    this.editModalRef.nativeElement.showModal();
  }
}
