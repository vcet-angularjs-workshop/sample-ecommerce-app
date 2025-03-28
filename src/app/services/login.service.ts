import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userInfoList = signal<User | null>(null);
  router = inject(Router);

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient
      .get<User>(`http://localhost:3000/users/${username}-${password}`)
      .subscribe((response: User) => {
        this.userInfoList.set(response);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigateByUrl('/home');
      });
  }
}
