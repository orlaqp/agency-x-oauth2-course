import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './containers/profile/profile.component';

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
