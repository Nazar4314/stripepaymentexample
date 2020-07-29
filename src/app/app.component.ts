import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public router:Router) {}
  ngOnInit()
  {

  }

  custome()
  {
    this.router.navigateByUrl("CustomeStripePaymentPageComponent")
  }
  stripe()
  {
    this.router.navigateByUrl("CheckOutStripePageComponent")
  }
}