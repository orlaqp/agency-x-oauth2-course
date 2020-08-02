import { ActivityService, AuthService, IActivity } from '@agency-x/auth/data-access';
import { Injectable, Injector } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UnauthorizeBottomSheetComponent } from '../components/unauthorize-bottom-sheet/unauthorize-bottom-sheet.component';



@Injectable({ providedIn: 'root' })
export class ActivityGuard implements CanActivate {

    constructor(
        private injector: Injector,
        private authService: AuthService,
        private activityService: ActivityService,
        private bottomSheet: MatBottomSheet
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // throw new Error('Method not implemented.');
        const Activity = route.data['activity'] as IActivity;

        if (!Activity) console.warn(`
            Activity guard has been used in a route that does not provide
            an Activity as part of its route data: ${route.url}
        `);

        // const activityInstance = this.injector.get<IActivity>(Activity);

        // if (!activityInstance) console.error(`An activity instance could be created for: ${Activity.name}`)
        
        return this.authService.oidcUser$.pipe(
            map(u => this.activityService.isAllowed(u, Activity)),
            tap(authorized => !authorized && this.openBottomSheet())
        )
    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     // throw new Error('Method not implemented.');
    //     const Activity = route.data['activity'] as ActivityCtor;

    //     if (!Activity) console.warn(`
    //         Activity guard has been used in a route that does not provide
    //         an Activity as part of its route data: ${route.url}
    //     `);

    //     const activityInstance = this.injector.get<IActivity>(Activity);

    //     if (!activityInstance) console.error(`An activity instance could be created for: ${Activity.name}`)
        
    //     return this.authService.oidcUser$.pipe(
    //         map(u => activityInstance.isAllowed(u)),
    //         tap(authorized => !authorized && this.openBottomSheet())
    //     )
    // }

    private openBottomSheet(): void {
        this.bottomSheet.open(UnauthorizeBottomSheetComponent);
    }

}