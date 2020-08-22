// import { IActivity, Permission } from '@agency-x/auth/data-access';
// import { Injectable } from '@angular/core';

// export interface IDashboardActivities {
//     View: IActivity;
//     Layout: IActivity;
// }

// export const DashboardActivities: IDashboardActivities = {
//     View: { can: Permission.DashboardView },
//     Layout: { can: Permission.DashboardLayout }
// }

// @Injectable({
//     providedIn: 'root'
// })
// export class DashboardActivitiesService implements IDashboardActivities {
//     Layout = DashboardActivities.Layout;
//     View = DashboardActivities.View;
// }

export const DashboardActivity = {
    Layout: 'Dashboard-Layout',
    View: 'Dashboard-View'
}