import { OidcUser } from '@agency-x/auth/data-access';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { OidcSecurityService, PublicEventsService } from 'angular-auth-oidc-client';
import { UpdateUserAction } from './auth.actions';

export interface AuthStateModel {
    user: OidcUser;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        user: null,
    },
})
@Injectable({
    providedIn: 'root',
})
export class AuthState {
    constructor(
        private oidcSecurityService: OidcSecurityService,
        private readonly eventService: PublicEventsService,
        private store: Store
    ) {

        // this.eventService
        //     .registerForEvents()
        //     .pipe(filter((notification) => notification.type === EventTypes.UserDataChanged))
        //     .subscribe((data) => {
        //         console.log('USER DATA CHANGED', data);
        //     });

        this.oidcSecurityService.isAuthenticated$.subscribe((isAuth) => {
            console.warn('IS AUTHENTICATED: ' + isAuth);
        });

        this.oidcSecurityService.userData$.subscribe((data: OidcUser) => {
            console.warn('USER DATA CHANGED', data);
            this.store.dispatch(new UpdateUserAction(data));
        });

        
    }

    @Selector()
    public static getUser(state: AuthStateModel) {
        return state.user;
    }

    @Selector()
    public static getIsAuthenticated(state: AuthStateModel) {
        return !!state.user;
    }

    @Action(UpdateUserAction)
    public add(
        ctx: StateContext<AuthStateModel>,
        { payload: user }: UpdateUserAction
    ) {
        ctx.patchState({ user });
    }
}
