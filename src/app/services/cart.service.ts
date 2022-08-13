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
      cartProduct.quantity += quantity;
    } else {
      this.cartProducts.push({ ...product, quantity });
    }
    this.productsList.next(this.cartProducts);
    console.log(this.cartProducts);
  }
}
