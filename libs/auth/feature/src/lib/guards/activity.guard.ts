import { ActivityService } from '@agency-x/auth/data-access';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UnauthorizeBottomSheetComponent } from '../components/unauthorize-bottom-sheet/unauthorize-bottom-sheet.component';

@Injectable({ providedIn: 'root' })
export class ActivityGuard implements CanActivate {

    constructor(
        private activityService: ActivityService,
        private bottomSheet: MatBottomSheet
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const activity = route.data['activity'] as string;

        if (!activity) console.warn(`
            Activity guard has been used in a route that does not provide
            an Activity as part of its route data: ${route.url}
        `);

        return this.activityService.isAllowed$(activity).pipe(
            tap(authorized => !authorized && this.openBottomSheet())
        );
    }
    
    private openBottomSheet(): void {
        this.bottomSheet.open(UnauthorizeBottomSheetComponent);
    }

}