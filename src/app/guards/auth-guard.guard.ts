import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('isLoggedIn') === 'true') {
    return true;
  }
  router.navigateByUrl('/');
  return false;
};
