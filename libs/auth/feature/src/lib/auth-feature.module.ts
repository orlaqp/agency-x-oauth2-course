import { AngularMaterialModule } from '@agency-x/angular-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UnauthorizeBottomSheetComponent } from './components/unauthorize-bottom-sheet/unauthorize-bottom-sheet.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AutoLoginComponent } from './containers/auto-login/auto-login.component';
import { IfActivityAllowedDirective } from './directives/if-activity-allowed.directive';

export const authFeatureRoutes: Route[] = [];

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule,
        RouterModule.forChild([
            {
                path: 'auto-login',
                pathMatch: 'full',
                component: AutoLoginComponent,
                //   , canActivate: [ AuthorizationGuard ]
            },
            { path: 'forbidden', component: UnauthorizedComponent },
            { path: 'unauthorized', component: UnauthorizedComponent },
        ]),
    ],
    declarations: [
        UnauthorizedComponent,
        AutoLoginComponent,
        UnauthorizeBottomSheetComponent,
        IfActivityAllowedDirective,
    ],
    exports: [
        IfActivityAllowedDirective
    ]
})
export class AuthFeatureModule {}
