import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';
import { AlertService } from './alert.service';

// I implemented the cart service using BehaviorSubject, inspired by the following repository:
// https://github.com/yshashi/add-to-cart

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartProducts: CartProduct[] = [];
  public productsList = new BehaviorSubject<any>([]);
  total: number = 0;

  constructor(public alertService: AlertService) {}

  getCartProducts(): Observable<CartProduct[]> {
    return this.productsList.asObservable();
  }

  addToCart(product: CartProduct): void {
    if (product.quantity < 1) {
      this.alertService.show(
        'Quantity must be greater than 0',
        'bg-warning text-white'
      );
      return;
    }
    const cartProduct = this.cartProducts.find((cp) => cp.id === product.id);
    if (cartProduct) {
      this.alertService.show(
        product.name + ' is already in your cart',
        'bg-warning text-white'
      );
    } else {
      this.cartProducts.push(product);
      this.alertService.show(
        product.name + ' was added to your cart',
        'bg-success text-white'
      );
    }
    this.productsList.next(this.cartProducts);
  }

  updateQuantity(product: Product, quantity: number): void {
    if (quantity < 1) {
      this.alertService.show(
        'Quantity must be greater than 0',
        'bg-danger text-white'
      );
      return;
    }
    const cartProduct = this.cartProducts.find((cp) => cp.id === product.id);
    if (cartProduct) {
      cartProduct.quantity = quantity;
    }
    this.productsList.next(this.cartProducts);
  }

  deleteProduct(product: CartProduct): void {
    const index = this.cartProducts.findIndex((cp) => cp.id === product.id);
    if (index !== -1) {
      this.cartProducts.splice(index, 1);
    }
    this.productsList.next(this.cartProducts);
  }

  calculateTotal(): number {
    this.total = 0;
    this.cartProducts.forEach((product) => {
      this.total += product.price * product.quantity;
    });
    this.total = Math.round(this.total * 100) / 100;
    return this.total;
  }

  clearCart(): void {
    this.cartProducts = [];
    this.productsList.next(this.cartProducts);
  }
}
