import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AxCanDirective } from './directives/ax-can.directive';

export const authFeatureRoutes: Route[] = [
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authFeatureRoutes),
        SharedModule
    ],
    declarations: [UnauthorizedComponent, AxCanDirective],
    exports: [AxCanDirective]
})
export class AuthFeatureModule {}
