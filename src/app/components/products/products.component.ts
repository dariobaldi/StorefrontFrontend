import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../models/cart-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  hideButton: boolean = true;

  constructor(private productService: ProductService, private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.updateInfo();
  }

  importProducts(): void {
    this.productService.importProducts();
  }

  updateInfo(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;

      if (this.products.length > 0) {
        this.hideButton = true;
      } else {
        this.hideButton = false;
      }
    });
  }

  addToCart(product: CartProduct): void {
    this.cartService.addToCart(product);
  }
}
