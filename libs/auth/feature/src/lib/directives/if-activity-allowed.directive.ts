import {
    ActivityService,
    AuthService,
    IActivity,
    OidcUser
} from '@agency-x/auth/data-access';
import {
    Directive,
    Input,
    OnDestroy,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { combineLatest, Subject, Subscription } from 'rxjs';

@Directive({
    selector: '[agencyXIfActivityAllowed]',
})
export class IfActivityAllowedDirective implements OnDestroy {
    @Input()
    set agencyXIfActivityAllowed(activity: IActivity) {
        this.activitySubject.next(activity);
    }

    private activitySubject = new Subject<IActivity>();
    private hasView = false;
    private sub: Subscription;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService,
        private activityService: ActivityService
    ) {
        this.sub = combineLatest([
            this.authService.oidcUser$,
            this.activitySubject,
        ]).subscribe(([user, activity]) =>
            this.checkVisibility(user, activity)
        );
    }

    ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    private checkVisibility(u: OidcUser, activity: IActivity) {
        if (!u || !activity) return;

        const can = this.activityService.isAllowed(u, activity);

        if (can && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (can && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
