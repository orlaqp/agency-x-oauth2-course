export interface IAccount {
    roles: string[];
}

export interface IResourceAccess {
    account: Account;
}

export interface IRealmAccess {
    roles: string[];
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
    constructor(private userData: IUserData) {}

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
}
