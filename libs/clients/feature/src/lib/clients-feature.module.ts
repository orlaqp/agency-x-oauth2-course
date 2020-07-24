import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './containers/clients/clients.component';
import { SharedModule } from '@agency-x/shared/shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: ClientsComponent }
        ]),
    ],
    declarations: [ClientsComponent],
})
export class ClientsFeatureModule {}
