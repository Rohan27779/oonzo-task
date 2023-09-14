import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const isAuthenticated = localStorage.getItem('token') === null; // Check if there's a token

    if (isAuthenticated) {
      return true; // User is authenticated, allow access
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
