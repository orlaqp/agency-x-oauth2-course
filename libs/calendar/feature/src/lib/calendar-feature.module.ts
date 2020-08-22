import { SharedModule } from '@agency-x/shared/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarComponent } from './containers/calendar/calendar.component';

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
