import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent {
  quantity: number;
  selectedFlavour: string = '';
  subtotal: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.quantity = +this.route.snapshot.paramMap.get('quantity')! || 0;
    this.selectedFlavour = this.route.snapshot.paramMap.get('selectedFlavour') || '';
    this.subtotal = +this.route.snapshot.paramMap.get('subtotal')! || 0;
    this.subtotal = this.quantity;
  }

  goBack(): void {
    this.router.navigate(['/quantity-selection']);
  }

  sendOrder(): void {
    alert('Order sent');
  }
}
