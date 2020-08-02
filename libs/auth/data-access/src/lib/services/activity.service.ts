import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IActivity } from '../definitions';
import { OidcUser } from '../models/oidc-user.model';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    constructor(private authService: AuthService) {}

    isAllowed$(Activity: IActivity): Observable<boolean> {
        if (!Activity) return of(true);
        
        return this.authService.oidcUser$.pipe(
            map(user => this.checkActivity(user, Activity))
        );
    }

    private checkActivity(user: OidcUser, activity: IActivity): boolean {
        if (!activity) return false;
        
        if (activity.can && !user.can(activity.can)) {
            return false;
        }

        if (activity.canAny && !user.canAny(activity.canAny)) {
            return false;
        }

        if (activity.canAll && !user.canAll(activity.canAll)) {
            return false;
        }

        return true;
    }
}
