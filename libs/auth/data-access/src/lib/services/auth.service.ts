import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from '@agency-x/config/frontend';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
    userData$ = this.oidcSecurityService.userData$;

    constructor(private router: Router, private envService: EnvService, private oidcSecurityService: OidcSecurityService) {
        
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
}
