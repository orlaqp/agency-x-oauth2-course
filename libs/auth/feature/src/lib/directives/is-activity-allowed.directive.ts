import { ActivityService } from '@agency-x/auth/data-access';
import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Directive({
    selector: '[agencyXIsActivityAllowed]',
})
export class IsActivityAllowedDirective implements AfterViewInit, OnDestroy {
    @Input()
    set agencyXIsActivityAllowed(activity: string) {
        this.activitySubject.next(activity);
    }

    @Input()
    disableClass = 'mat-button-disabled'

    private activitySubject = new BehaviorSubject<string>(null);
    private sub: Subscription;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private activityService: ActivityService
    ) {}

    ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.sub = this.activitySubject.pipe(
            switchMap(a => this.activityService.isAllowed$(a)),
            tap(allowed => {
                // debugger;
                this.el.nativeElement.disabled = !allowed;
                // this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
                // this.renderer.setAttribute(this.el.nativeElement, 'disabled', '');
                
                if (allowed) {
                    // this.el.nativeElement.classList.add('disabled')
                    this.renderer.removeClass(this.el.nativeElement, this.disableClass);
                } else {
                    // this.el.nativeElement.classList.remove('disabled')
                    this.renderer.addClass(this.el.nativeElement, this.disableClass);
                }
            })
        ).subscribe();
    }
}
