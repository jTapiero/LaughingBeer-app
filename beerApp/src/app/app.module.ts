import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteBeerPageComponent } from './page/favourite-beer-page/favourite-beer-page.component';
import { SearchBeerPageComponent } from '@page/search-beer-page/search-beer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteBeerPageComponent,
    SearchBeerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
