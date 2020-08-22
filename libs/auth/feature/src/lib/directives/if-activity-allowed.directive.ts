import { ActivityService } from '@agency-x/auth/data-access';
import {
    Directive,
    Input,
    OnDestroy,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Directive({
    selector: '[agencyXIfActivityAllowed]',
})
export class IfActivityAllowedDirective implements OnDestroy {
    @Input()
    set agencyXIfActivityAllowed(activity: string) {
        this.activitySubject.next(activity);
    }

    private activitySubject = new Subject<string>();
    private hasView = false;
    private sub: Subscription;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private activityService: ActivityService
    ) {
        this.sub = this.activitySubject.pipe(
            switchMap(activity => this.activityService.isAllowed$(activity))
        )
        .subscribe((allowed) =>
            this.checkVisibility(allowed)
        );
    }

    ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    private checkVisibility(allowed: boolean) {
        if (allowed && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (allowed && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
