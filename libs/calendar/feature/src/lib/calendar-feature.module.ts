import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { SharedModule } from '@agency-x/shared/shared';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin
  ]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FullCalendarModule,

        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            { path: '', component: CalendarComponent }
        ]),
    ],
    declarations: [CalendarComponent],
})
export class CalendarFeatureModule {}
