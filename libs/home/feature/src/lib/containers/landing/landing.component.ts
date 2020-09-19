import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'agency-x-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    constructor(public oidcSecurityService: OidcSecurityService) {}

    login() {
        this.oidcSecurityService.authorize();
    }

    // logout() {
    //     this.oidcSecurityService.logoff();
    // }
}
