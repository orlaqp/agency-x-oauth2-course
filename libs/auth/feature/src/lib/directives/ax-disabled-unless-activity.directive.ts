import { AuthService } from '@agency-x/auth/data-access';
import {
    AfterViewInit,
    Directive,


    ElementRef, Input,
    OnDestroy
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
    selector: '[axDisabledUnlessActivity]',
})
export class AxDisabledUnlessActivityDirective implements OnDestroy, AfterViewInit {
    private _activitySubject = new BehaviorSubject<string>(null);
    private _sub: Subscription;
    
    @Input()
    set axDisabledUnlessActivity(activity: string) {
        this._activitySubject.next(activity);
    }

    constructor(
        private authService: AuthService,
        private el: ElementRef
    ) {}

    ngAfterViewInit(): void {
        this._sub = this.authService.can(this._activitySubject).pipe(
            tap(isAuth => this.el.nativeElement.disabled = !isAuth)
        )
        .subscribe();
    }

    ngOnDestroy(): void {
        this._sub?.unsubscribe();
    }
}
