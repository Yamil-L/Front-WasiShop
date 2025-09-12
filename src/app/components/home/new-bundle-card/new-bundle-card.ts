import { Component, input, InputSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Bundle } from '../../../interfaces/bundle';

@Component({
  selector: 'app-new-bundle-card',
  imports: [],
  templateUrl: './new-bundle-card.html',
  styleUrl: './new-bundle-card.css',
})
export class NewBundleCard {
  bundle: InputSignal<Bundle> = input.required<Bundle>();

  constructor(private router: Router) {}

  goToBundle() {
    this.router.navigate(['/bundle', this.bundle().id]);
  }
}
