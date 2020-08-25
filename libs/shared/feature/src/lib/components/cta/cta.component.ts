import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'agency-x-cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
    @Input()
    text: string;

    @Input()
    buttonCaption: string;

    @Input()
    imagePath: string;
}
