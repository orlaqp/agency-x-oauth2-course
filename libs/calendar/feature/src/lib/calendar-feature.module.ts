import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { SharedModule } from '@agency-x/shared/shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: CalendarComponent }
        ]),
    ],
    declarations: [CalendarComponent],
})
export class CalendarFeatureModule {}
