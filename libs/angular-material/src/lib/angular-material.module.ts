import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
    imports: [
        CommonModule,
        // OverlayModule,
        // FlexLayoutModule,
        // MatMenuModule,
        // MatIconModule,
        // MatButtonModule,
        // MatGridListModule,
        // MatSidenavModule,
        // MatCardModule,
        // MatBottomSheetModule,
    ],
    exports: [
        OverlayModule,
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatSidenavModule,
        MatCardModule,
        MatBottomSheetModule,
        MatFormFieldModule,
        MatInputModule
    ],
})
export class AngularMaterialModule {}
