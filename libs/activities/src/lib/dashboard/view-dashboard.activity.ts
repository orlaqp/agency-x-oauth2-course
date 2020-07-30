import { IActivity, OidcUser } from '../interfaces';

export class ViewDashboardActivity implements IActivity {
    
    isAllowed(user: OidcUser): boolean {
        return false;
    }

}