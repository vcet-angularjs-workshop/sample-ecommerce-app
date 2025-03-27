import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  userName = signal('');
  password = signal('');

  onUserNameInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.userName.set(inputElement.value);
  }

  onPasswordInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.password.set(inputElement.value);
  }

  handleLogin() {
    console.log(this.userName(), this.password());
  }
}
