import { Component, signal, inject } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/products.model';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { ShowHovereffectDirective } from '../../directives/show-hovereffect.directive';

@Component({
  selector: 'app-home-page',
  imports: [ItemsCardComponent, ShowHovereffectDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  categoriesService = inject(CategoriesService);
  productService = inject(ProductsService);
  cartService = inject(CartService);

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.categoriesService.loadAllCategories();
    this.productService.loadProductsList();
  }
}
