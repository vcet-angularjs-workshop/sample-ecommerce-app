import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './components/TopHeader/top-header/top-header.component';
import { FooterComponent } from './components/Footer/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sample-ecommerce-app';
}
