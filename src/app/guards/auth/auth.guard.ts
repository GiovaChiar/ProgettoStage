import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (typeof localStorage !== 'undefined'){
    const ver = localStorage.getItem('user');
    if(!ver)
      return false
    else
      return true
  }else
    return false
}
