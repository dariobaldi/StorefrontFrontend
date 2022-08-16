import { Component, OnInit } from '@angular/core';
import { OrderInfo } from 'src/app/models/order-info';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-purchase-confirmation',
  templateUrl: './purchase-confirmation.component.html',
  styleUrls: ['./purchase-confirmation.component.css'],
})
export class PurchaseConfirmationComponent implements OnInit {
  orderInfo: OrderInfo = {} as OrderInfo;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderInfo = this.orderService.getOrderInfo();
  }
}
