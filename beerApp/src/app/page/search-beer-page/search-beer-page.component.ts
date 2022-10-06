import { Component, OnInit } from '@angular/core';
import { Beer } from '@model/beer';
import { PunkApiService } from '@service/punk-api.service';

@Component({
  selector: 'app-search-beer-page',
  templateUrl: './search-beer-page.component.html',
  styleUrls: ['./search-beer-page.component.scss']
})
export class SearchBeerPageComponent implements OnInit {

  beers:Array<Beer> = [];
  isBrowseModeOn = true;

  constructor(private punkApiService:PunkApiService) { }

  ngOnInit(): void {
    this.initBrowseMode();
  }

  OnFoodPairedSearch(data:string):void{
    this.punkApiService.getFoodPairingSearch(data).subscribe((beers) => {    
      this.beers = beers as Array<Beer>});
  }

  changeMode(browserStatus:boolean){
    this.isBrowseModeOn = browserStatus;
    if (this.isBrowseModeOn == true) {
      this.initBrowseMode();
    }
  }

  private initBrowseMode():void{
    this.punkApiService.getBeerPage(1).subscribe((beers) => {    
      this.beers = beers as Array<Beer>});

  }

}
