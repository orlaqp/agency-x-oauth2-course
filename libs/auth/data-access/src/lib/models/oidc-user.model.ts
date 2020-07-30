export interface IOidcUser {
    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    locale: string;
    family_name: string;
    email: string;
}

export class OidcUser implements IOidcUser {
    
    constructor(data: IOidcUser) {
        Object.assign(this, data);
    }

    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    locale: string;
    family_name: string;
    email: string;

}