import { Component, computed, inject, signal } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  imports: [ItemsCardComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cartService = inject(CartService);

  totalPrice = computed(() => {
    let total = 0;
    for (const product of this.cartService.cartItemsList()) {
      total += product.price;
    }
    return total;
  });

  removeFromCart(id: string) {
    this.cartService.removeFromCart(id);
  }

  ngOnInit() {
    this.cartService.loadAllCartItems();
  }
}
