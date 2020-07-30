import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActivityGuard implements CanActivate {
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // throw new Error('Method not implemented.');
        const activity = route.data['activity'];

        if (!activity) console.warn(`
            Activity guard has been used in a route that does not provide
            an Activity as part of its route data: ${route.url}
        `);

        return true;
    }

}