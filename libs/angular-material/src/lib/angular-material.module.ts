import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
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
        MatBottomSheetModule
    ],
})
export class AngularMaterialModule {}
