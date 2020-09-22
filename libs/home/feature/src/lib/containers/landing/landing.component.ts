import { AuthService } from '@agency-x/auth/data-access';
import { Component } from '@angular/core';

@Component({
    selector: 'agency-x-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    constructor(private authService: AuthService) {}

    login() {
        this.authService.authorize();
    }
}
