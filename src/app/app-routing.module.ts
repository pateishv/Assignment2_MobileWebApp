import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuantitySelectionComponent } from './quantity-selection/quantity-selection.component';
import { FlavourSelectionComponent } from './flavour-selection/flavour-selection.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: 'quantity-selection', component: QuantitySelectionComponent },
  { path: 'flavour-selection/:quantity', component: FlavourSelectionComponent },
  { path: 'order-summary/:quantity/:selectedFlavour', component: OrderSummaryComponent },
  { path: '', redirectTo: '/quantity-selection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
