import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BehaviorSubject } from 'rxjs';
import { User } from '../..';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private userSubject = new BehaviorSubject<User>(null);

    userData$ = this.userSubject.asObservable();
    
    constructor(public oidcSecurityService: OidcSecurityService) {
        this.oidcSecurityService.checkAuth().subscribe((auth) => console.log('is authenticated', auth));

        this.oidcSecurityService.userData$.subscribe(u => this.userSubject.next(!!u ? new User(u) : null));
    }

    authorize() {
        this.oidcSecurityService.authorize();
    }

    logout() {
        this.oidcSecurityService.logoff();
    }
}
