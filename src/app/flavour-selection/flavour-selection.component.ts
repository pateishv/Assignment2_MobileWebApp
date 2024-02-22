import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flavour-selection',
  templateUrl: './flavour-selection.component.html',
  styleUrls: ['./flavour-selection.component.css'],
})
export class FlavourSelectionComponent {
  quantity: number;

  flavours: string[] = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint', 'Caramel'];

  selectedFlavour = '';

  constructor(private navigator: Router, private route: ActivatedRoute) {
    this.quantity = +this.route.snapshot.paramMap.get('quantity')! || 0;
  }

  navigateToOrderSummary(): void {
    this.navigator.navigate(['/order-summary', this.quantity, this.selectedFlavour]);
  }
}
