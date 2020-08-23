import { AngularMaterialModule } from '@agency-x/angular-material';
import { ActivityGuard, AuthorizationGuard } from '@agency-x/auth/feature';
import { DashboardActivity } from '@agency-x/dashboard/activities';
import { EmailInputModule } from '@agency-x/email-input';
import { LanguagePickerModule } from '@agency-x/language-picker';
import { NavigationFeatureModule } from '@agency-x/navigation/feature';
import { ThemePickerModule } from '@agency-x/theme-picker';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { LandingComponent } from './containers/landing/landing.component';

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
            { path: '', pathMatch: 'full', component: LandingComponent },
            {
                path: 'home',
                // pathMatch: 'full',
                // redirectTo: '/home/dashboard',
                component: HomeComponent,
                canActivate: [AuthorizationGuard],
                children: [
                    {
                        path: 'dashboard',
                        data: {
                            activity: DashboardActivity.View
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
