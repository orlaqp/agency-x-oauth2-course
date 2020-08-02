import { AuthService, IActivity } from '@agency-x/auth/data-access';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[agencyXIfActivityAllowed]',
})
export class IfActivityAllowedDirective {
    @Input()
    set agencyXIfActivityAllowed(activity: IActivity) {
        

        // if (!activity.isAllowed() && !this.hasView) {
        //     this.viewContainer.createEmbeddedView(this.templateRef);
        //     this.hasView = true;
        // } else if (condition && this.hasView) {
        //     this.viewContainer.clear();
        //     this.hasView = false;
        // }
    }

    private hasView = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService
    ) {}
}
