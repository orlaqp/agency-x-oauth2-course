import { IOidcUser, ResourceAccess, RolePermissions } from '../definitions';
import { Permission } from './permissions.enum';


export class OidcUser implements IOidcUser {
    private roles: string[];
    private permissions: Permission[];
    
    constructor(data: IOidcUser, clientId: string) {
        if (!data) throw new Error('user data is missing');

        Object.assign(this, data);
        this.roles = this.resource_access[clientId].roles;
        this.permissions = this.getUserPermissions(this.roles);
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

    public can(permission: Permission): boolean {
        return this.permissions.includes(permission);
    }

    public canAny(permissions: Permission[]): boolean {
        return this.permissions.some(p => permissions.includes(p));
    }

    public canAll(permissions: Permission[]): boolean {
        return this.permissions.every(p => permissions.includes(p));
    }

    private getUserPermissions(roles: string[]): Permission[] {
        if (!roles) return [];

        const permissionSet = new Set<Permission>();

        roles.forEach(r => {
            const rolePermissions = this.role_permissions[r];
            rolePermissions.forEach(p => permissionSet.add(p));
        });

        return Array.from(permissionSet);
    }
}