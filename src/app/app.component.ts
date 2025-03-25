import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './components/TopHeader/top-header/top-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sample-ecommerce-app';
}
