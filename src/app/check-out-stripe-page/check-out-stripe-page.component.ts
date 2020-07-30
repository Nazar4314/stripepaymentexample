import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';


declare var Stripe;
declare var StripeCheckout

@Component({
  selector: 'app-check-out-stripe-page',
  templateUrl: './check-out-stripe-page.component.html',
  styleUrls: ['./check-out-stripe-page.component.css']
})
export class CheckOutStripePageComponent implements OnInit {

  constructor() { }
  amount: number=20
  amountavilable :number=100
amountpaying:number=0;
  @Input() description: string;
  @ViewChild('cardElement',{static: true}) cardElement: ElementRef;

  ngOnInit() {

    this.handler = StripeCheckout.configure({
      key: 'pk_test_51HATQfFHw2WhVXNVnOnbfD4u5NK6uE6y1UXyZY4LxQ7PuxB3STuepiUDte9HPY9eXjqnc9cWSjkuENTm72PpeD1T00Q8gQGFfc',
      image: 'assets/abc.png',
      locale: 'auto',
      amount: this.amountpaying,
      source: async (source) => {
        this.loading = true;
       this.loading = false;

      }
    });
  }
  stripe : stripe.Stripe;
  handler: StripeCheckoutHandler;
  card;
  cardErrors;

  loading = false;
  confirmation;


  async checkout(e) {
    
    this.handler.open({
      name: 'Arshid Sir',
      description: "Test Of Stripe",
      amount: this.amountpaying*100,
      email: "Testmail@stripe.com",
    });
    e.preventDefault();
  }

  // Close on navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }
}
