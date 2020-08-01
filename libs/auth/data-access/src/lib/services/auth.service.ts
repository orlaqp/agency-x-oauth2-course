import { EnvService } from '@agency-x/config/frontend';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs/operators';
import { OidcUser } from '../models/oidc-user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
    // userData$ = this.oidcSecurityService.userData$;

    oidcUser$ = this.oidcSecurityService.isAuthenticated$.pipe(
        map(isAuth => isAuth ? this.getOidcUser() : null)
    );
    // oidcUser$ = this.userData$.pipe(
    //     map(data => new OidcUser(data))
    // );

    private getOidcUser() {
        const data = this.parseJwt(this.oidcSecurityService.getToken());
        return new OidcUser(data);
    }

    constructor(private router: Router, private envService: EnvService, private oidcSecurityService: OidcSecurityService) {
        this.oidcUser$.subscribe(console.log);
    }

    checkAuth() {
        this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
            if (!isAuthenticated) {
                if ('/auto-login' !== window.location.pathname) {
                    this.setRedirect(window.location.pathname);
                    this.router.navigate(['/auto-login']);
                }
            }
            if (isAuthenticated) {
                debugger;
                const token = this.oidcSecurityService.getToken();
                const tokenObj = this.parseJwt(token);

                this.navigateToStoredEndpoint();
            }
        });
    }

    goToRegistration() {
        const oidc = this.envService.oidcConfig;
        window.location.href = 
            `${oidc.stsServer}/protocol/openid-connect/registrations?client_id=${oidc.clientId}&response_type=code&scope=openid%20email&redirect_uri=${oidc.redirectUrl}&kc_locale=${oidc.locale}`;
    }

    authorize() {
        this.oidcSecurityService.authorize();
    }

    logoff() {
        this.oidcSecurityService.logoff();
    }

    setRedirect(path = window.location.pathname) {
        const storedPath = this.getRedirect();

        if (storedPath) return;

        localStorage.setItem('redirect', path);
    }

    private getRedirect() {
        return localStorage.getItem('redirect');
    }

    private removeRedirect() {
        localStorage.removeItem('redirect');
    }

    private navigateToStoredEndpoint() {
        const path = this.getRedirect();

        this.removeRedirect();

        if (this.router.url === path) {
            return;
        }

        if (path.toString().includes('/unauthorized')) {
            this.router.navigate(['/home']);
        } else if (path.toString() === '/') {
            this.router.navigate(['/home']);
        } else {
            this.router.navigate([path]);
        }
    }

    private parseJwt (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
}
