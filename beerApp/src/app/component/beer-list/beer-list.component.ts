
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Beer } from '@class/beer';
import { PunkApiService } from '@service/punk-api.service';
import { UserfavouritesService } from '@service/userfavourites.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit,OnChanges {

  @ViewChild('divList')el!: ElementRef;
  @Input() listBeer:Array<Beer> = [];
  @Input() isBrowseModeOn:boolean = true;
  @Input() isFavouriteList:boolean = false;

  pageNumber:number = 1;
  endScroll:boolean = false;
   

  constructor(private punkApiService:PunkApiService,
              private userfavouritesService:UserfavouritesService ) {
    this.removeCardFromListListener();
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isBrowseModeOn']?.currentValue == true ) {
      this.endScroll = false;
      this.pageNumber = 1;
      this.scrolListToTop();
    }
  }

  ngOnInit(): void {
  }

  onScroll():void{

    const handleApiResponse:Observer<Beer[]| any> = {
      next:(pageBeers:Array<Beer>)=>{
        if (pageBeers) {
          this.listBeer.push(...pageBeers) 
        } else {
          this.endScroll = true;
        }
      },
      error:(error)=>{},//todo
      complete:()=>{},
    }

    if (!this.endScroll && this.isBrowseModeOn) {
      this.punkApiService.getBeerPage(++this.pageNumber)
      .subscribe(handleApiResponse)     
    }
  }

  removeFromFavouriteList(idBeer:number):void{
    if (this.isFavouriteList) {
      this.removeFromList(idBeer);
    }
  }

  private scrolListToTop():void{
    if (this.el !== undefined) {
      this.el.nativeElement.scrollTo(0,0)
    }
    
  }

  private removeCardFromListListener():void{
    this.userfavouritesService.removeFromListEvent.subscribe(
      (idBeer:number)=>{ this.removeFromFavouriteList(idBeer)}
    );
  }
  
  
  private removeFromList(idBeer:number):void{
    this.listBeer.forEach((beer,idx,list)=>{
      if (beer.id == idBeer) {
        list.splice(idx,1)
      }
    })
  }

}

// private remove from list 
//public remove favorite list

// directive for mat icon ??
