import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import {
    AuthModule,
    EventTypes,
    OidcConfigService,
    PublicEventsService
} from 'angular-auth-oidc-client';
import { filter } from 'rxjs/operators';
import { AuthState } from './auth/auth.state';


const w = window || {};
const browserEnv = w['__env'] || {};

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () => oidcConfigService.withConfig(browserEnv.oidcConfig);
}

@NgModule({
    imports: [
        CommonModule,
        AuthModule.forRoot(),
        NgxsModule.forFeature([AuthState]),
    ],
    declarations: [],
    providers: [
        OidcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configureAuth,
            deps: [OidcConfigService],
            multi: true,
        },
    ],
})
export class AuthDataAccessModule {
    constructor(private readonly eventService: PublicEventsService) {
        this.eventService
            .registerForEvents()
            .pipe(
                filter(
                    (notification) =>
                        notification.type === EventTypes.ConfigLoaded
                )
            )
            .subscribe((config) => {
                console.log('ConfigLoaded', config);
            });
    }
}
