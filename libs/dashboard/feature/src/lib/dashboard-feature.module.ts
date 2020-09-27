import { AuthFeatureModule } from '@agency-x/auth/feature';
import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: DashboardComponent }
        ]),
        AuthFeatureModule,
    ],
    declarations: [DashboardComponent],
})
export class DashboardFeatureModule {}
