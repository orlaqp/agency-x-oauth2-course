import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

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
    declarations: [UnauthorizedComponent],
})
export class AuthFeatureModule {}
