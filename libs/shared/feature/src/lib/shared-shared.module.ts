import { AngularMaterialModule } from '@agency-x/angular-material';
import { AuthFeatureModule } from '@agency-x/auth/feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularTiltModule } from 'angular-tilt';
import { CtaComponent } from './components/cta/cta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, AngularTiltModule, AuthFeatureModule],
  declarations: [NotFoundComponent, UnderConstructionComponent, WidgetComponent, CtaComponent],
  exports: [NotFoundComponent, UnderConstructionComponent, WidgetComponent, CtaComponent]
})
export class SharedModule {}
