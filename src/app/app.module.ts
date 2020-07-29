import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeStripePaymentPageComponent } from './custome-stripe-payment-page/custome-stripe-payment-page.component';
import { CheckOutStripePageComponent } from './check-out-stripe-page/check-out-stripe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomeStripePaymentPageComponent,
    CheckOutStripePageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
