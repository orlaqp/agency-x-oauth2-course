import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularTiltModule } from 'angular-tilt';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AngularMaterialModule } from '@agency-x/angular-material';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, AngularTiltModule],
  declarations: [NotFoundComponent, UnderConstructionComponent, WidgetComponent],
  exports: [NotFoundComponent, UnderConstructionComponent, WidgetComponent]
})
export class SharedModule {}
