import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './containers/profile/profile.component';
import { SharedModule } from '@agency-x/shared/shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: ProfileComponent }
        ]),
    ],
    declarations: [ProfileComponent],
})
export class ProfileFeatureModule {}
