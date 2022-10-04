import { Component, OnInit } from '@angular/core';
import { Beer } from '@class/beer';
import { ListMode } from '@class/list-mode';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-favourite-beer-page',
  templateUrl: './favourite-beer-page.component.html',
  styleUrls: ['./favourite-beer-page.component.scss']
})
export class FavouriteBeerPageComponent implements OnInit {

  allFavouriteBeer:Beer[] = [];

  public get ListMode(): typeof ListMode {
    return ListMode; 
  }

  constructor(private userfavouritesService:UserfavouritesService) {
    this.allFavouriteBeer = this.userfavouritesService.getAllFavouriteBeer();
   }

  ngOnInit(): void { 
  }

}
