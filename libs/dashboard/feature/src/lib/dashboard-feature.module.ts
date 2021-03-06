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
    ],
    declarations: [DashboardComponent],
})
export class DashboardFeatureModule {}
