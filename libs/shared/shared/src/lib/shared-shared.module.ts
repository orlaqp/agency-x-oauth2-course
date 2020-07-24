import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularTiltModule } from 'angular-tilt';

@NgModule({
  imports: [CommonModule, AngularTiltModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class SharedModule {}
