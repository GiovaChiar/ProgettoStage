import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const ver = localStorage.getItem('user');
  if(!ver)
    return false;
  else
    return true;
};
