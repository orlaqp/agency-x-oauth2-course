import { IOidcUser, ResourceAccess, RoleActivities } from '../definitions';


export class OidcUser implements IOidcUser {
    private roles: string[];
    private activities: string[];
    
    constructor(data: IOidcUser, clientId: string) {
        if (!data) throw new Error('user data is missing');
        
        Object.assign(this, data);
        this.roles = this.resource_access[clientId].roles;
        this.activities = this.getUserActivities(this.roles);
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
    role_activities: RoleActivities;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;

    public can(activity: string): boolean {
        return this.activities.includes(activity);
    }

    private getUserActivities(roles: string[]): any {
        if (!roles) return [];

        const activitySet = new Set<string>();

        roles.forEach(r => {
            const roleActivities = this.role_activities[r];
            roleActivities.forEach(p => activitySet.add(p));
        });

        return Array.from(activitySet);
    }
}