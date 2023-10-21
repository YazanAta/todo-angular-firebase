import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const as = inject(AuthService)
  const router = inject(Router);

  return new Promise(resolve => {
    as.user.subscribe(user => {
      if (user) resolve(true);
      else {
        router.navigate(['/login']);
        resolve(false)
      }
    })
  })

};
