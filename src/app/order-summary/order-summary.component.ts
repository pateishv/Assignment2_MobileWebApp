import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent {
  quantity: number;
  selectedFlavour = '';

  constructor(private navigator: Router, private route: ActivatedRoute) {
    this.quantity = +this.route.snapshot.paramMap.get('quantity')! || 0;
    this.selectedFlavour = this.route.snapshot.paramMap.get('selectedFlavour') || '';
  }

  navigateBackToFlavourSelection(): void {
    this.navigator.navigate(['/flavour-selection', this.quantity]);
  }

  finalizeOrder(): void {
    console.log('Order finalized');
  }
}
