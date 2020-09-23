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
}
