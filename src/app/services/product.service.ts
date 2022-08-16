import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJpIiwiZmlyc3RfbmFtZSI6Ik1hcmllbGEiLCJsYXN0X25hbWUiOiJEZWwgQmFycmlvIiwiaWF0IjoxNjU4NjQ0NDg1fQ.IDW55pCtF9bNgzBPCkWahAXGm7XhedfJ--3NF7ckNlg';

  constructor(private http: HttpClient) {}

  importProducts(): void {
    this.http.get('../../assets/data.json').subscribe((res) => {
      const products = res as Product[];
      for (let i = 0; i < products.length; i++) {
        this.http
          .post('http://localhost:3333/products', products[i])
          .subscribe((res) => {
            console.log(res);
          }),
          (err: Error) => {
            console.log(err);
          };
      }
      window.location.reload();
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3333/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3333/products/${id}`);
  }
}
