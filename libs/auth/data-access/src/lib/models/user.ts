export interface IAccount {
    roles: string[];
}

export interface IResourceAccess {
    account: Account;
}

export interface IRealmAccess {
    roles: string[];
}

export interface IRoleActivities {
    [role: string]: string[];
}

export interface IUserData {
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
    resource_access: IResourceAccess;
    email_verified: boolean;
    realm_access: IRealmAccess;
    role_activities: IRoleActivities;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
}


export interface IUserData {
    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
}

export class User {
    private _activities: string[];

    constructor(private userData: IUserData) {
        this._activities = this._getActivities(
            userData.realm_access.roles,
            userData.role_activities
        );
    }
    
    public get name() {
        return this.userData.name;
    }

    public get email() {
        return this.userData.email;
    }

    public hasRole(role: string): boolean {
        if (!this.userData.realm_access.roles || !role) return false;

        return this.userData.realm_access.roles.includes(role);
    }

    public can(activity: string): boolean {
        return !activity || this._activities.includes(activity);
    }

    private _getActivities(roles: string[], role_activities: IRoleActivities): string[] {
        if (!roles) return [];

        const activitySet = new Set<string>();

        roles.forEach(r => {
            const activities = role_activities[r.toLowerCase()];

            if (!activities) return;

            activities.forEach(a => activitySet.add(a));
        });

        return Array.from(activitySet);
    }
}
