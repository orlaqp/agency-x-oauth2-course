import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {
    AuthDataAccessModule,
} from '@agency-x/auth/data-access';
import { AuthFeatureModule } from '@agency-x/auth/feature';
import { LandingComponent } from '@agency-x/home/feature';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { SharedModule, NotFoundComponent } from '@agency-x/shared/shared';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                // { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '', pathMatch: 'full', component: LandingComponent },
                {
                    path: 'home',
                    loadChildren: () =>
                        import('@agency-x/home/feature').then(
                            (module) => module.HomeFeatureModule
                        ),
                },
                {path: '404', component: NotFoundComponent},
                {path: '**', redirectTo: '/404'}
            ],
            { initialNavigation: 'enabled' }
        ),
        BrowserAnimationsModule,
        ConfigFrontendModule,
        // Shared
        SharedModule,
        // Auth
        AuthDataAccessModule,
        // Ngxs
        NgxsModule.forRoot([]),
        NgxsStoragePluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        // features / data access
        AngularMaterialModule,
        AuthDataAccessModule,
        AuthFeatureModule,
        // NavigationFeatureModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
