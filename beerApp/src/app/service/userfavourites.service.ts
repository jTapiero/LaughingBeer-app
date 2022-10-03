import { InteractivityChecker } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { Beer } from '@class/beer';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class UserfavouritesService {

  constructor(private local: LocalStorageService) {
    
   }

   isFavourite(idBeer:string):boolean{
    return (this.local.get(idBeer))?true:false;
   }

   addFavouriteBeer(beer:Beer):void{
    if (!this.local.get(`${beer.id}`)) {
      this.local.set(`${beer.id}`,beer,1,'d');
    }
   }

   removeFavouriteBeer(idBeer:string):void{
    if (this.local.get(idBeer)) {
      this.local.remove(idBeer);
    }
   }

   removeAllFavouriteBeer():void{
    this.local.clear();
   }


   
}
