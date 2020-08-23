import { AngularMaterialModule } from '@agency-x/angular-material';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { SharedModule } from '@agency-x/shared/feature';
import { StoreModule } from '@agency-x/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
        AngularMaterialModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
