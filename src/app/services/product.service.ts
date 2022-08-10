import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts().subscribe(res => this.products = res);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3333/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3333/products/${id}`);
  }
}
