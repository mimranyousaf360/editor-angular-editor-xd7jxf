import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-gate-way',
  templateUrl: './payment-gate-way.component.html',
  styleUrls: ['./payment-gate-way.component.css'],
})
export class PaymentGateWayComponent implements OnInit {
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_09GJJuNx4ScHIcoML69tx2aa';

  constructor() {}

  /*------------------------------------------
  --------------------------------------------
  ngOnInit() Function
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
    this.invokeStripe();
  }

  /*------------------------------------------
  --------------------------------------------
  makePayment() Function
  --------------------------------------------
  --------------------------------------------*/
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'ItSolutionStuff.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  }

  /*------------------------------------------
  --------------------------------------------
  invokeStripe() Function
  --------------------------------------------
  --------------------------------------------*/
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
