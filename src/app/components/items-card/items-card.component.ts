import { Component, input } from '@angular/core';

@Component({
  selector: 'app-items-card',
  imports: [],
  templateUrl: './items-card.component.html',
  styleUrl: './items-card.component.scss',
})
export class ItemsCardComponent {
  item = input<any>([]);
  isCartPage = input<boolean>(false);
}
