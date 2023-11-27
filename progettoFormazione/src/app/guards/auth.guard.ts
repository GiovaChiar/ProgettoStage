import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const ver = localStorage.getItem('token');
  if(!ver){
    return false;
  }else
    return true;
};
