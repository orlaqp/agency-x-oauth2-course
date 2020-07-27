import { Routes } from '@angular/router';
import { NotFoundComponent } from '@agency-x/shared/shared';
import { LandingComponent } from '@agency-x/home/feature';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', pathMatch: 'full', component: LandingComponent },
    {
        path: 'home',
        loadChildren: () =>
            import('@agency-x/home/feature').then(
                (module) => module.HomeFeatureModule
            ),
    },
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];