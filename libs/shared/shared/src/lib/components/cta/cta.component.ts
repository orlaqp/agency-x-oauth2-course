import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
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

    constructor() {}

    ngOnInit(): void {}
}
