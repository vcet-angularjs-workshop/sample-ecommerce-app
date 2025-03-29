import { Injectable, signal } from '@angular/core';
import { Product } from '../model/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList = signal<Product[]>([]);

  constructor(private httpClient: HttpClient) {}

  loadProductsList() {
    this.httpClient
      .get<Product[]>('http://localhost:3000/products')
      .subscribe((response: Product[]) => {
        this.productsList.set(response);
      });
  }
}
