import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Beer } from '@class/beer';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-favourite-icon',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  isFavourite:boolean = false;

  constructor(private userfavouritesService:UserfavouritesService) { }


  @Input() beer:Beer= {} as Beer;

  ngOnInit(): void {
    this.isFavourite = this.userfavouritesService.isFavourite(`${this.beer.id}`)
  }

  onClick(event:MouseEvent):void{
    console.log('child click');
    event.stopPropagation()
    this.isFavourite = !this.isFavourite
    if (this.isFavourite) {
      this.userfavouritesService.addFavouriteBeer(this.beer)
    } else {
      this.userfavouritesService.removeFavouriteBeer(`${this.beer.id}`)
    }
  }

}



