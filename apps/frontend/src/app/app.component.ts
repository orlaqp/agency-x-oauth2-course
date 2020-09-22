import { AuthService } from '@agency-x/auth/data-access';
import { Component } from '@angular/core';

@Component({
    selector: 'agx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(authService: AuthService) {
        authService.userData$.subscribe(console.log);
    }
}
