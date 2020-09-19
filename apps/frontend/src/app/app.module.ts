import { AngularMaterialModule } from '@agency-x/angular-material';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { SharedModule } from '@agency-x/shared/feature';
import { StoreModule } from '@agency-x/store';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { AppComponent } from './app.component';
import { routes } from './routes';

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () =>
        oidcConfigService.withConfig({
            stsServer: 'http://localhost:8080/auth/realms/Agency-X',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'web_app',
            scope: 'openid profile email',
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: `${window.location.origin}/silent-renew.html`,
            logLevel: LogLevel.Debug,
        });
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
        ConfigFrontendModule,
        SharedModule,
        StoreModule,
        AuthModule.forRoot(),
        // features / data access
        AngularMaterialModule,
    ],
    providers: [
        OidcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configureAuth,
            deps: [OidcConfigService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
