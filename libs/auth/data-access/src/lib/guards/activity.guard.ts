import { Injectable, Injector } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivityCtor, IActivity } from '../definitions';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ActivityGuard implements CanActivate {

    constructor(
        private injector: Injector,
        private authService: AuthService
    ) {
        
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // throw new Error('Method not implemented.');
        const Activity = route.data['activity'] as ActivityCtor;

        if (!Activity) console.warn(`
            Activity guard has been used in a route that does not provide
            an Activity as part of its route data: ${route.url}
        `);

        const activityInstance = this.injector.get<IActivity>(Activity);

        if (!activityInstance) console.error(`An activity instance could be created for: ${Activity.name}`)
        
        // return activityInstance.isAllowed()
        return this.authService.oidcUser$.pipe(
            map(u => {
                debugger;
                return activityInstance.isAllowed(u)
            })
        )
    }

}