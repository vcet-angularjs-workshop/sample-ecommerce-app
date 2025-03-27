import { Component, signal, inject } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-page',
  imports: [ItemsCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  categoriesService = inject(CategoriesService);
  productService = inject(ProductsService);

  ngOnInit() {
    this.categoriesService.loadAllCategories();
    this.productService.loadProductsList();
  }
}
