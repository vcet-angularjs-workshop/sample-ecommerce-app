import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  router = inject(Router);
  loginService = inject(LoginService);

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/');
  }
}
