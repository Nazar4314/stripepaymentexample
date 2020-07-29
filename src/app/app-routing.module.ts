import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomeStripePaymentPageComponent } from './custome-stripe-payment-page/custome-stripe-payment-page.component';
import { CheckOutStripePageComponent } from './check-out-stripe-page/check-out-stripe-page.component';

const routes: Routes = [  { path: 'CustomeStripePaymentPageComponent', component: CustomeStripePaymentPageComponent },
{ path: 'CheckOutStripePageComponent', component: CheckOutStripePageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
