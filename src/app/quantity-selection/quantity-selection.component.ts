import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quantity-selection',
  templateUrl: './quantity-selection.component.html',
  styleUrls: ['./quantity-selection.component.css'],
})
export class QuantitySelectionComponent {
  constructor(private router: Router) {}

  navigateToFlavourSelection(quantity: number): void {
    this.router.navigate([`/flavour-selection/${quantity}`]);
  }
}
