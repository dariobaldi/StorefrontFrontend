import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/cart-product';
import { EventEmitter } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  quantity: number = 1;
  @Output() addCartProduct: EventEmitter<CartProduct> = new EventEmitter<CartProduct>();

  constructor(private cartService: CartService, private alertService: AlertService) {
  }

  ngOnInit(): void {}

  addToCart() {
    const cartProduct: CartProduct = {...this.product, quantity: this.quantity}
    this.addCartProduct.emit(cartProduct);
  }
}
