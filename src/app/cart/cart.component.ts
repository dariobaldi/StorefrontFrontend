import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: CartProduct[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe(res => {
      this.cartProducts = res;
      this.total = this.cartService.calculateTotal();
    });
  }
}
