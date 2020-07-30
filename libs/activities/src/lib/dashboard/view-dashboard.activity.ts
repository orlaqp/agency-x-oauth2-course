import { IActivity, OidcUser } from '@agency-x/auth/data-access';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ViewDashboardActivity implements IActivity {
    
    isAllowed(user: OidcUser): boolean {
        return false;
    }

}