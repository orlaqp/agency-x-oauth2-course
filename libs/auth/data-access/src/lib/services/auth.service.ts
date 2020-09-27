import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {
    BehaviorSubject,
    combineLatest,
    isObservable,
    Observable,
    of
} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../..';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private userSubject = new BehaviorSubject<User>(null);

    userData$ = this.userSubject.asObservable();

    constructor(public oidcSecurityService: OidcSecurityService) {
        this.oidcSecurityService
            .checkAuth()
            .subscribe((auth) => console.log('is authenticated', auth));

        this.oidcSecurityService.userData$.subscribe((u) =>
            this.userSubject.next(!!u ? new User(u) : null)
        );
    }

    authorize() {
        this.oidcSecurityService.authorize();
    }

    logout() {
        this.oidcSecurityService.logoff();
    }

    can(activity: string | Observable<string>): Observable<boolean> {
        if (!activity) return of(false);

        const activityObservable = isObservable(activity)
            ? activity
            : of(activity);

        return combineLatest([this.userData$, activityObservable]).pipe(
            map(([user, act]) => {
                return user?.can(act);
            })
        );
    }
}
