import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SilderBarsComponent } from './silder-bars/silder-bars.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SilderBarsComponent,
    PhotoViewerComponent,
    FilterSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
