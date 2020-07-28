import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { StoreModule } from '@agency-x/store';
import {
    AuthDataAccessModule,
} from '@agency-x/auth/data-access';
import { AuthFeatureModule } from '@agency-x/auth/feature';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { SharedModule } from '@agency-x/shared/shared';
import { routes } from './routes';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
        ConfigFrontendModule,
        SharedModule,
        StoreModule,
        // features / data access
        AuthDataAccessModule,
        AngularMaterialModule,
        AuthDataAccessModule,
        AuthFeatureModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
