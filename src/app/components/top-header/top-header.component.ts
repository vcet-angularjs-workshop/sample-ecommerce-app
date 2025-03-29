import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-top-header',
  imports: [],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent {
  languageList = ['English', 'Hindi', 'Kannada'];
  selectedLanguage = signal('English');
}
