import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  private hasAuthCookie(): boolean {
    return document.cookie
      .split(';')
      .some((cookie) => cookie.trim().startsWith('token='));
  }

  private hasUserId(): boolean {
    return !!sessionStorage.getItem('userId');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.hasAuthCookie() && this.hasUserId()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
