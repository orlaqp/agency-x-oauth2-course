import { NotFoundComponent } from '@agency-x/shared/feature';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@agency-x/home/feature').then(
                (module) => module.HomeFeatureModule
            ),
    },
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];