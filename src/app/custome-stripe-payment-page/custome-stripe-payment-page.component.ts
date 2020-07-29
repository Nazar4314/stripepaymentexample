import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';


declare var Stripe;
declare var StripeCheckout: StripeCheckoutStatic;

@Component({
  selector: 'app-custome-stripe-payment-page',
  templateUrl: './custome-stripe-payment-page.component.html',
  styleUrls: ['./custome-stripe-payment-page.component.css']
})
export class CustomeStripePaymentPageComponent implements OnInit {

  constructor() { }
  amount: number=20

amountpaying:number;
  @Input() description: string;
  @ViewChild('cardElement',{static: true}) cardElement: ElementRef;

  stripe : stripe.Stripe;
  handler: StripeCheckoutHandler;
  card;
  cardErrors;

  loading = false;
  confirmation;

  ngOnInit() {

    this.stripe = Stripe('pk_test_aeUUjYYcx4XNfKVW60pmHTtI');
    const elements = this.stripe.elements();

    this.card = elements.create('card');
    
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
        this.cardErrors = error && error.message;
    });
  }

  async handleForm(e) {
    e.preventDefault();
    console.log(this.card)



    

    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // Inform the customer that there was an error.
      this.cardErrors = error.message;
    } else {
      // Send the token to your server.
      this.loading = true;
      this.loading = false;

    }
  }
}
