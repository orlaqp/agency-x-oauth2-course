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
import { AuthorizationGuard } from '@agency-x/auth/data-access';
import { NavigationFeatureModule } from '@agency-x/navigation/feature';

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
                component: HomeComponent,
                canActivate: [AuthorizationGuard],
                children: [
                    {
                        path: 'clients',
                        loadChildren: () =>
                            import('@agency-x/clients/feature').then(
                                (module) => module.ClientsFeatureModule
                            ),
                    },
                    {
                        path: 'payments',
                        loadChildren: () =>
                            import('@agency-x/payments/feature').then(
                                (module) => module.PaymentsFeatureModule
                            ),
                    },
                ],
            },
           
        ]),
    ],
    declarations: [LandingComponent, HomeComponent],
})
export class HomeFeatureModule {}
