import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const ver = localStorage.getItem('token');
  if(!ver){
    return false;
  }else
    return true;
};
