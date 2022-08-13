import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['../cart.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct: CartProduct;

  constructor() {
    this.cartProduct = {
      id: 1,
      name: 'Product 1',
      price: 100,
      url: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      quantity: 1
    };
  }

  ngOnInit(): void {
  }

}
