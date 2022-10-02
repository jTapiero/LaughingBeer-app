import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteBeerPageComponent } from './page/favourite-beer-page/favourite-beer-page.component';
import { SearchBeerPageComponent } from '@page/search-beer-page/search-beer-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BeerListComponent } from './component/beer-list/beer-list.component';
import { BeerSearchComponent } from './component/beer-search/beer-search.component';
import { BeerCardComponent } from './component/beer-card/beer-card.component';
import { BeerModalComponent } from './component/beer-modal/beer-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteBeerPageComponent,
    SearchBeerPageComponent,
    HeaderComponent,
    BeerListComponent,
    BeerSearchComponent,
    BeerCardComponent,
    BeerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
