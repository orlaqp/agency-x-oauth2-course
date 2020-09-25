import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate,


    Router, RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../..';
import { User } from '../models/user';

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

        return this.authService.userData$.pipe(
            map((u: User) => u?.can(activity)),
            tap(
                (authorized) =>
                    !authorized && this.router.navigate(['/unauthorized'])
            )
        );
    }
}
