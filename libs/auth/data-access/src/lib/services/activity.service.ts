import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IActivity } from '../definitions';
import { OidcUser } from '../models/oidc-user.model';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    constructor(private authService: AuthService) {}

    isAllowed(Activity: IActivity): Observable<boolean> {
        return this.authService.oidcUser$.pipe(
            map(u => this.checkActivity(u, Activity))
        );
    }

    private checkActivity(u:OidcUser, a: IActivity): boolean {
        if (a.permissions) {
            return u.canAll(a.permissions);
        }

        return false;
    }
}
