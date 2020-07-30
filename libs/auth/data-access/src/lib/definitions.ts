import { OidcUser } from './models/oidc-user.model';

export type ActivityCtor = new (...args: any[]) => IActivity

export interface IActivity {
    isAllowed(user: OidcUser): boolean;
}



