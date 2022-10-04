import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { favoriteBeer } from '@class/beer';
import { BeerRating } from '@class/beer-rating';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-rate-menu',
  templateUrl: './rate-menu.component.html',
  styleUrls: ['./rate-menu.component.scss']
})
export class RateMenuComponent implements OnInit {

  //@Input() beer:favoriteBeer = ;
  selectRateControl = new FormControl<BeerRating>(BeerRating.NEUTRAL,{updateOn:"change"})

  public get BeerRating(): BeerRating[] {
    return  Object.values(BeerRating);
  }

  constructor(private userfavouritesService:UserfavouritesService) {
      this.selectRateControl.valueChanges.subscribe((newRating) =>{
        this.userfavouritesService.updateRatingBeer(1,BeerRating.BEURK)
      });
   }


  ngOnInit(): void {
  }



}