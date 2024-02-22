import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quantity-selection',
  templateUrl: './quantity-selection.component.html',
  styleUrls: ['./quantity-selection.component.css'],
})
export class QuantitySelectionComponent {
  constructor(private navigator: Router) {}

  navigateToFlavorSelection(quantity: number): void {
    this.navigator.navigate(['/flavor-selection', quantity]);
  }
}
