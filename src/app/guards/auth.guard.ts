import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private location: Location,
                private router: Router) { }

                
  canActivate(
      next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.authService.isLoggedIn().subscribe((res:any) =>{        
            if (res.auth) { 
              resolve(true);
            } else {
                this.router.navigate(['/login']);
                localStorage.clear();
                resolve(false);
            }
          }
        )
      });
    }
  
}
