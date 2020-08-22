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
        AuthFeatureModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: DashboardComponent }
        ]),
    ],
    declarations: [DashboardComponent],
})
export class DashboardFeatureModule {}
