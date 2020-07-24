import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: DashboardComponent }
        ]),
    ],
    declarations: [DashboardComponent],
})
export class DashboardFeatureModule {}
