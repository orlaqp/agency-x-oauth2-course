import { IActivity, OidcUser } from '@agency-x/auth/data-access';

export class ViewDashboardActivity implements IActivity {
    
    isAllowed(user: OidcUser): boolean {
        throw new Error('Method not implemented.');
    }

}