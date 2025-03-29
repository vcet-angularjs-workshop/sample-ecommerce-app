import { Injectable, signal } from '@angular/core';
import { Product } from '../model/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemsList = signal<Product[]>([]);

  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product) {
    this.cartItemsList.set([...this.cartItemsList(), product]);
    this.httpClient.post('http://localhost:3000/cartItems', product).subscribe(
      (response) => {
        // Handle response
      },
      (error) => {
        // Handle error
      }
    );
  }

  removeFromCart(id: string) {
    this.cartItemsList.set(
      this.cartItemsList().filter((product) => product.id !== id)
    );
    this.httpClient.delete(`http://localhost:3000/cartItems/${id}`).subscribe(
      (response) => {
        // Handle response
      },
      (error) => {
        // Handle error
      }
    );
  }

  loadAllCartItems() {
    this.httpClient
      .get<Product[]>('http://localhost:3000/cartItems')
      .subscribe((response: Product[]) => {
        this.cartItemsList.set(response);
      });
  }
}
