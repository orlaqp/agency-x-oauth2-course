import { IOidcUser, ResourceAccess, RolePermissions } from '../definitions';
import { Permission } from './permissions.enum';


export class OidcUser implements IOidcUser {
    
    constructor(data: IOidcUser) {
        Object.assign(this, data);
    }

    exp: number;
    iat: number;
    auth_time: number;
    jti: string;
    iss: string;
    aud: string;
    sub: string;
    typ: string;
    azp: string;
    nonce: string;
    session_state: string;
    at_hash: string;
    acr: string;
    resource_access: ResourceAccess;
    email_verified: boolean;
    name: string;
    groups: string[];
    role_permissions: RolePermissions;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;

    public hasAny(permissions: Permission[]): boolean {
        
    }

    public hasAll(permissions: Permission[]): boolean {

    }
}