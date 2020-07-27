import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth/auth.state';
import {
    AuthModule,
    EventTypes,
    OidcConfigService,
    PublicEventsService,
} from 'angular-auth-oidc-client';
import { filter } from 'rxjs/operators';

const w = window || {};
const browserEnv = w['__env'] || {};

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () => oidcConfigService.withConfig(browserEnv.oidcConfig);
}

@NgModule({
  imports: [
    CommonModule,
    AuthModule.forRoot(),
    NgxsModule.forFeature([AuthState])
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
