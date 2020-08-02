import { IActivity } from '@agency-x/auth/data-access';
import {
    ChangeDetectionStrategy, Component,


    Input, OnInit
} from '@angular/core';

@Component({
    selector: 'agency-x-cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent implements OnInit {
    @Input()
    text: string;

    @Input()
    buttonCaption: string;

    @Input()
    imagePath: string;

    @Input()
    activity: IActivity[];

    constructor() {}

    ngOnInit(): void {}
}
