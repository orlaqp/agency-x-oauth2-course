import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate,


    Router, RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../..';

@Injectable({
    providedIn: 'root',
})
export class ActivityGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const activity = next.data['activity'];

        return this.authService.can(activity).pipe(
            tap(
                (authorized) =>
                    !authorized && this.router.navigate(['/unauthorized'])
            )
        );
    }
}
