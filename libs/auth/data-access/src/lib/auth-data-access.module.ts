import { EnvService } from '@agency-x/config/frontend';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';

export function configureAuth(oidcConfigService: OidcConfigService, envService: EnvService) {
    debugger;
    return () => oidcConfigService.withConfig(envService.oidcConfig);
}

@NgModule({
    imports: [
        CommonModule,
        AuthModule.forRoot(),
    ],
    providers: [
        OidcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configureAuth,
            deps: [OidcConfigService, EnvService],
            multi: true,
        },
    ],
})
export class AuthDataAccessModule {}
