import { ViewDashboardActivity } from '@agency-x/dashboard/activities';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'agency-x-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    activity = ViewDashboardActivity;

    constructor() {}

    ngOnInit(): void {}
}
