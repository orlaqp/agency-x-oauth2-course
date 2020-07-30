import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@agency-x/theme-picker';
import { LanguagePickerModule } from '@agency-x/language-picker';
import { EmailInputModule } from '@agency-x/email-input';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { HomeComponent } from './containers/home/home.component';
import { AuthorizationGuard, ActivityGuard } from '@agency-x/auth/data-access';
import { NavigationFeatureModule } from '@agency-x/navigation/feature';
import { ViewDashboardActivity } from '@agency-x/activities';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        ThemePickerModule,
        LanguagePickerModule,
        EmailInputModule,
        ReactiveFormsModule,
        NavigationFeatureModule,

        RouterModule.forChild([
            {
                path: '',
                // pathMatch: 'full',
                // redirectTo: '/home/dashboard',
                component: HomeComponent,
                canActivate: [AuthorizationGuard],
                children: [
                    {
                        path: 'dashboard',
                        data: {
                            activity: ViewDashboardActivity
                        },
                        canActivate: [ActivityGuard],
                        loadChildren: () =>
                            import('@agency-x/dashboard/feature').then(
                                (module) => module.DashboardFeatureModule
                            ),
                    },
                    {
                        path: 'clients',
                        loadChildren: () =>
                            import('@agency-x/clients/feature').then(
                                (module) => module.ClientsFeatureModule
                            ),
                    },
                    {
                        path: 'calendar',
                        loadChildren: () =>
                            import('@agency-x/calendar/feature').then(
                                (module) => module.CalendarFeatureModule
                            ),
                    },
                    {
                        path: 'payments',
                        loadChildren: () =>
                            import('@agency-x/payments/feature').then(
                                (module) => module.PaymentsFeatureModule
                            ),
                    },
                    {
                        path: 'settings',
                        loadChildren: () =>
                            import('@agency-x/settings/feature').then(
                                (module) => module.SettingsFeatureModule
                            ),
                    },
                    {
                        path: 'profile',
                        loadChildren: () =>
                            import('@agency-x/profile/feature').then(
                                (module) => module.ProfileFeatureModule
                            ),
                    },
                ],
            },
            
        ]),
    ],
    declarations: [LandingComponent, HomeComponent],
})
export class HomeFeatureModule {}
