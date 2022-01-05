import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeGridModule, InfiniteScrollService, PageService, ColumnChooserService, ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
  ],
  providers: [
    ToolbarService,
    PageService,
    ColumnChooserService,
    InfiniteScrollService,
    SortService,
    FilterService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
