import { Component, OnInit } from '@angular/core';
import { Beer } from '@class/beer';
import { PunkApiService } from '@service/punk-api.service';

@Component({
  selector: 'app-search-beer-page',
  templateUrl: './search-beer-page.component.html',
  styleUrls: ['./search-beer-page.component.scss']
})
export class SearchBeerPageComponent implements OnInit {

  beers:Array<Beer> = [];

  constructor(private punkApiService:PunkApiService) { }

  ngOnInit(): void {
   this.punkApiService.getAllBeer().subscribe((beers) => {
    console.log(JSON.stringify(beers[0]))
    this.beers = beers as Array<Beer>});
  }

}
