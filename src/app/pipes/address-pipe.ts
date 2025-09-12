import { Pipe, PipeTransform } from '@angular/core';
import { AddressDto } from '../services/address';

@Pipe({
  name: 'address',
  standalone: true,
})
export class AddressPipe implements PipeTransform {
  transform(address: AddressDto): string {
    if (!address) return '';

    const parts = [
      address.number ? `${address.number}` : '',
      address.line_1,
      address.line_2,
      address.city,
      address.state,
      address.country,
    ].filter(Boolean);

    return parts.join(', ');
  }
}
