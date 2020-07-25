import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularTiltModule } from 'angular-tilt';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { CtaComponent } from './components/cta/cta.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, AngularTiltModule],
  declarations: [NotFoundComponent, UnderConstructionComponent, WidgetComponent, CtaComponent],
  exports: [NotFoundComponent, UnderConstructionComponent, WidgetComponent, CtaComponent]
})
export class SharedModule {}
