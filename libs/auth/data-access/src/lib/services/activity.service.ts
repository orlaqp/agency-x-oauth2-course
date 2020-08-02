import { Injectable } from '@angular/core';
import { IActivity } from '../definitions';
import { OidcUser } from '../models/oidc-user.model';

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    constructor() {}

    isAllowed(u: OidcUser, Activity: IActivity): boolean {
        return this.checkActivity(u, Activity);
    }

    private checkActivity(u:OidcUser, a: IActivity): boolean {
        if (a.can && !u.can(a.can)) {
            return false;
        }

        if (a.canAny && !u.canAny(a.canAny)) {
            return false;
        }

        if (a.canAll && !u.canAll(a.canAll)) {
            return false;
        }

        return true;
    }
}
