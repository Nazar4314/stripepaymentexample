import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeStripePaymentPageComponent } from './custome-stripe-payment-page.component';

describe('CustomeStripePaymentPageComponent', () => {
  let component: CustomeStripePaymentPageComponent;
  let fixture: ComponentFixture<CustomeStripePaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeStripePaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeStripePaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
