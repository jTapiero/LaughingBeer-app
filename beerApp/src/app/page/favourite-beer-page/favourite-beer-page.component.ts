import { Component, OnInit } from '@angular/core';
import { Beer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-favourite-beer-page',
  templateUrl: './favourite-beer-page.component.html',
  styleUrls: ['./favourite-beer-page.component.scss']
})
export class FavouriteBeerPageComponent implements OnInit {

  allFavouriteBeer:Beer[] = [];

  public get ListBeerMode(): typeof ListBeerMode {
    return ListBeerMode; 
  }

  constructor(private userfavouritesService:UserfavouritesService) {
    this.allFavouriteBeer = this.userfavouritesService.getAllFavouriteBeer();
  }

  ngOnInit(): void { 
  }
}
