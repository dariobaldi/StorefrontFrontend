import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartProducts: CartProduct[];

  constructor() {
    this.cartProducts = [];
  }

  getCartProducts() {
    return this.cartProducts;
  }

  addToCart(product: Product, quantity: number) {
    const cartProduct = this.cartProducts.find(cp => cp.id === product.id);
    if (cartProduct) {
      cartProduct.quantity += quantity;
    } else {
      this.cartProducts.push({ ...product, quantity });
    }
  }
}
