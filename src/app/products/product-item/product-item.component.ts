import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product={
      id: 1,
      name: 'Product 1',
      price: 100,
      url: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    };
   }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product, 1);
  }

}
