import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  hideButton: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateInfo();
  }

  importProducts() {
    this.products = this.productService.importProducts();
  }

  updateInfo() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;

      if (this.products.length > 0) {
        this.hideButton = true;
      } else {
        this.hideButton = false;
      }
    });
  }
}
