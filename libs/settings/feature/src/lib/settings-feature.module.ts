import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './containers/settings/settings.component';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: SettingsComponent }
        ]),
    ],
    declarations: [SettingsComponent],
})
export class SettingsFeatureModule {}
