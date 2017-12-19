import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvelListComponent } from './marvel-list/marvel-list.component';
import { MarvelDialogComponent } from './marvel-dialog/marvel-dialog.component';

import { MarvelListService } from './marvel-list/marvel-list.service';
import { LinkFormatPipe } from './pipes/link-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvelListComponent,
    MarvelDialogComponent,
    LinkFormatPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [MarvelListService],
  bootstrap: [AppComponent],
  entryComponents: [MarvelDialogComponent]
})
export class AppModule { }
