import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutStripePageComponent } from './check-out-stripe-page.component';

describe('CheckOutStripePageComponent', () => {
  let component: CheckOutStripePageComponent;
  let fixture: ComponentFixture<CheckOutStripePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutStripePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutStripePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
