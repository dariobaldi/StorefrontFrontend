import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  product: Product = { id: 0, name: '', description: '', price: 0, url: '' };
  public quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productService.getProduct(this.id).subscribe((res) => {
      this.product = res;
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart({...this.product, quantity: this.quantity});
  }
}
