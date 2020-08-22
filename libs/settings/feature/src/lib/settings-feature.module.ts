import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './containers/settings/settings.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: SettingsComponent }
        ]),
    ],
    declarations: [SettingsComponent],
})
export class SettingsFeatureModule {}
