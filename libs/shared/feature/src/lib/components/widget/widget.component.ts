import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    selector: 'agency-x-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
    @Input()
    title: string;

    constructor() {}

    ngOnInit(): void {}
}
