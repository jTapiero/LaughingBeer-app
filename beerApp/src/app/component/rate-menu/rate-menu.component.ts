import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { favoriteBeer } from '@model/beer';
import { BeerRating } from '@model/beer-rating';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-rate-menu',
  templateUrl: './rate-menu.component.html',
  styleUrls: ['./rate-menu.component.scss']
})
export class RateMenuComponent implements OnInit {

  @Input() beer:favoriteBeer = {} as favoriteBeer;
  selectRateControl = new FormControl<BeerRating>(BeerRating.NEUTRAL,{updateOn:"change"})

  public get BeerRating(): BeerRating[] {
    return  Object.values(BeerRating);
  }

  constructor(private userfavouritesService:UserfavouritesService) {
      this.selectRateControl.valueChanges.subscribe((newRating) =>{
        if (newRating !== null ) {
          this.userfavouritesService.updateRatingBeer(this.beer.id,newRating)
        }
      });
   }

  ngOnInit(): void {
  }

}
