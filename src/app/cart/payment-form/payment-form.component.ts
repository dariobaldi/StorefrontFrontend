import { Component, OnInit } from '@angular/core';
import { OrderInfo } from 'src/app/models/order-info';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  orderInfo: OrderInfo = {} as OrderInfo;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  submitForm(): void {
    this.orderService.createOrder(this.orderInfo);
  }
}
