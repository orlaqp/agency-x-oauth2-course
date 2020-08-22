import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentsComponent } from './containers/payments/payments.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: PaymentsComponent }
        ]),
    ],
    declarations: [PaymentsComponent],
})
export class PaymentsFeatureModule {}
