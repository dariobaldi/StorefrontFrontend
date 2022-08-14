import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';

// I implemented the cart service using BehaviorSubject, inspired by the following repository:
// https://github.com/yshashi/add-to-cart

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartProducts: CartProduct[] = [];
  public productsList = new BehaviorSubject<any>([]);

  constructor() { }

  getCartProducts(): Observable<CartProduct[]> {
    return this.productsList.asObservable();
  }

  addToCart(product: Product, quantity: number) {
    const cartProduct = this.cartProducts.find(cp => cp.id === product.id);
    if (cartProduct) {
      alert('This product is already in your cart');
    } else {
      this.cartProducts.push({ ...product, quantity });
      alert('Product added to your cart');
    }
    this.productsList.next(this.cartProducts);
  }

  updateQuantity(product: Product, quantity: number){
    const cartProduct = this.cartProducts.find(cp => cp.id === product.id);
    if (cartProduct) {
      cartProduct.quantity = quantity;
    }
    this.productsList.next(this.cartProducts);
  }

  deleteProduct(product: CartProduct): void {
    const index = this.cartProducts.findIndex(cp => cp.id === product.id);
    if (index !== -1) {
      this.cartProducts.splice(index, 1);
    }
    this.productsList.next(this.cartProducts);
  }
}
