import { AuthService } from '@agency-x/auth/data-access';
import {
    Directive,
    Input,
    OnDestroy,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
    selector: '[axIfActivity]',
})
export class AxIfActivityDirective implements OnDestroy {
    private _activitySubject = new BehaviorSubject<string>(null);
    private _sub: Subscription;
    private _hasView: boolean;

    @Input()
    set axIfActivity(activity: string) {
        this._activitySubject.next(activity);
    }

    constructor(
        authService: AuthService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
        this._sub = authService.can(this._activitySubject).pipe(
            tap(isAuth => this.updateView(isAuth))
        )
        .subscribe();
    }

    ngOnDestroy(): void {
        this._sub?.unsubscribe();
    }

    private updateView(isAuth: boolean) {
        if (isAuth && !this._hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this._hasView = true;
        } else if (!isAuth && this._hasView) {
            this.viewContainer.clear();
            this._hasView = false;
        }
    }
}
