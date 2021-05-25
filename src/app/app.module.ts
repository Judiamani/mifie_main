import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTreeModule, MatTooltipModule, MatTabsModule, MatTableModule, MatSortModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { MonchampComponent } from './monchamp/monchamp.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MonchampComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatToolbarModule,
      MatMenuModule,
      BrowserModule,
      AppRoutingModule,
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      FormsModule,
      NgxQRCodeModule,


      A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule

  ],
  entryComponents: [
    AccueilComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
