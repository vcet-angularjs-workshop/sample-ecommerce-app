import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  userName = signal('');
  password = signal('');

  loginService = inject(LoginService);
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onUserNameInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.userName.set(inputElement.value);
  }

  onPasswordInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.password.set(inputElement.value);
  }

  handleLogin(e: Event) {
    e.preventDefault();
    this.loginService.login(this.userName(), this.password());
  }
}
