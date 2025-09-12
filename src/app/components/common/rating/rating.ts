import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {
  rate: InputSignal<number> = input.required<number>();
  get parseRatingToArray(): number[] {
    let rate = this.rate();
    if (rate === 0) {
      rate = 0.5;
    }
    const halfStars = Math.round(rate * 2);
    const result = Array(10).fill(0);
    for (let i = 0; i < halfStars && i < 10; i++) {
      result[i] = 1;
    }
    return result;
  }
}
