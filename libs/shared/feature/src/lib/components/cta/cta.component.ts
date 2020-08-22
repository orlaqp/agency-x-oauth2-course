import { ActivityService } from '@agency-x/auth/data-access';
import {
    ChangeDetectionStrategy, Component,


    Input
} from '@angular/core';

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

    @Input()
    activity: string;

    // TODO: Explain here the difference between Subject an AsyncSubject
    // async only works with Subject if the async pipe subscribe to the the subject
    // before we call the next method
    // private activitySubject = new BehaviorSubject<IActivity>(null);

    // public isDisabled$ = this.activitySubject.pipe(
    //     switchMap(activity => this.activityService.isAllowed$(activity)),
    //     map(isAllowed => !isAllowed)
    // );

    constructor(private activityService: ActivityService) { }
}
