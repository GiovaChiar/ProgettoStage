import { CanActivateFn } from '@angular/router';

export const regGuard: CanActivateFn = (route, state) => {
  return false;
};
