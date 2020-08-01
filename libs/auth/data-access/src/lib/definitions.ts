import { OidcUser } from './models/oidc-user.model';
import { Permission } from './models/permissions.enum';

export type ActivityCtor = new (...args: any[]) => IActivity

export interface IActivity {
    isAllowed(user: OidcUser): boolean;
}

export interface IOidcUser {
    exp:                number;
    iat:                number;
    auth_time:          number;
    jti:                string;
    iss:                string;
    aud:                string;
    sub:                string;
    typ:                string;
    azp:                string;
    nonce:              string;
    session_state:      string;
    at_hash:            string;
    acr:                string;
    resource_access:    ResourceAccess;
    email_verified:     boolean;
    name:               string;
    groups:             string[];
    role_permissions:   RolePermissions;
    preferred_username: string;
    given_name:         string;
    family_name:        string;
    email:              string;
}

export interface ResourceAccess {
    web_app: WebApp;
}

export interface WebApp {
    roles: string[];
}

export interface RolePermissions {
    [role: string]:    Permission[];
}
