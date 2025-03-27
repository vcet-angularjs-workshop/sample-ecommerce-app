import { Component, computed, signal } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { itemsList } from '../../../mock-data';

@Component({
  selector: 'app-cart-page',
  imports: [ItemsCardComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  shoppingItems = signal(itemsList);
  totalPrice = computed(() => {
    let total = 0;
    for (const product of this.shoppingItems()) {
      total += product.price;
    }
    return total;
  });
}
