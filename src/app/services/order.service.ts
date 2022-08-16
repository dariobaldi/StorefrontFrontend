import { Injectable } from '@angular/core';
import { OrderInfo } from '../models/order-info';
import { CartService } from './cart.service';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderInfo: OrderInfo = {} as OrderInfo;

  constructor(
    private cartService: CartService,
    private alertService: AlertService,
    private router: Router
  ) {}

  createOrder(order: OrderInfo): void {
    if (this.cartService.cartProducts.length > 0) {
      this.orderInfo = order;
      this.orderInfo.total = this.cartService.calculateTotal();
      this.cartService.clearCart();
      this.router.navigateByUrl('/order-success');
    } else {
      this.alertService.show('Your cart is empty', 'bg-danger text-white');
    }
  }

  getOrderInfo(): OrderInfo {
    return this.orderInfo;
  }
}
