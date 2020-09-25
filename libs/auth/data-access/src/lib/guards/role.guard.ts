import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const role = next.data["role"];
        
        return this.authService.userData$.pipe(
            map(u => u?.hasRole(role)),
            tap(authorized => !authorized && this.router.navigate(['/unauthorized']))
        );
    }
}
