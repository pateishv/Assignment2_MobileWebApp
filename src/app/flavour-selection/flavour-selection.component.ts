import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flavour-selection',
  templateUrl: './flavour-selection.component.html',
  styleUrls: ['./flavour-selection.component.css'],
})
export class FlavourSelectionComponent {
  quantity: number;
  subtotal: number;
  selectedFlavour: string = '';
  flavours: string[] = ['Vanilla', 'Chocolate', 'Red Velvet', 'Salted Caramel', 'Coffee'];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.quantity = +this.route.snapshot.paramMap.get('quantity')! || 0;
    this.subtotal = this.quantity * 2;
  }

  goBack(): void {
    this.router.navigate(['/quantity-selection']);
  }

  goToSummary(): void {
    this.router.navigate(['/order-summary', this.subtotal, this.selectedFlavour]);
  }

  selectFlavour(flavour: string): void {
    this.selectedFlavour = flavour;
  }
}
