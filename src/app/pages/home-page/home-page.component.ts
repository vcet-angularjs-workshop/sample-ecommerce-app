import { Component, signal } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { categories, itemsList } from '../../../mock-data';

@Component({
  selector: 'app-home-page',
  imports: [ItemsCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  category = signal(categories);
  shoppingItems = signal(itemsList);
}
