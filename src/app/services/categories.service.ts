import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoriesList = signal<Category[]>([]);

  constructor(private httpClient: HttpClient) {}

  loadAllCategories() {
    this.httpClient
      .get<Category[]>('http://localhost:3000/categories')
      .subscribe((response) => {
        this.categoriesList.set(response);
      });
  }
}
