import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularTiltModule } from 'angular-tilt';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

@NgModule({
  imports: [CommonModule, AngularTiltModule],
  declarations: [NotFoundComponent, UnderConstructionComponent],
  exports: [NotFoundComponent, UnderConstructionComponent]
})
export class SharedModule {}
