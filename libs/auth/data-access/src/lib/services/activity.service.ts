import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OidcUser } from '../models/oidc-user.model';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    constructor(private authService: AuthService) {}

    isAllowed$(activity: string): Observable<boolean> {
        if (!activity) return of(true);
        
        return this.authService.oidcUser$.pipe(
            map(user => this.checkActivity(user, activity))
        );
    }

    private checkActivity(user: OidcUser, activity: string): boolean {
        if (!activity) return false;
        
        return user.can(activity);
    }
}
