import { Component, input } from '@angular/core';
import { Product } from '../../model/products.model';

@Component({
  selector: 'app-items-card',
  imports: [],
  templateUrl: './items-card.component.html',
  styleUrl: './items-card.component.scss',
})
export class ItemsCardComponent {
  item = input<Product>({
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
  });
  isCartPage = input<boolean>(false);
}
