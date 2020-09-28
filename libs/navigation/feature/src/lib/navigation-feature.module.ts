import { AngularMaterialModule } from '@agency-x/angular-material';
import { AuthFeatureModule } from '@agency-x/auth/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationComponent } from './containers/navigation/navigation.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularMaterialModule,
        AuthFeatureModule,
    ],
    declarations: [NavigationComponent, SidebarComponent],
    exports: [SidebarComponent]
})
export class NavigationFeatureModule {}
