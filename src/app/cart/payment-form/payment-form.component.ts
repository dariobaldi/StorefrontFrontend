import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  public clientName: string = '';
  public address: string = '';
  public cardNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log('Form submitted');
  }

}
