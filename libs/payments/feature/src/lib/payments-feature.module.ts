import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentsComponent } from './containers/payments/payments.component';
import { SharedModule } from '@agency-x/shared/shared';

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
