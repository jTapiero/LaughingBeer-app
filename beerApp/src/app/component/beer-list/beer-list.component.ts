import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '@class/beer';
import { PunkApiService } from '@service/punk-api.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  @Input() listBeer:Array<Beer> = [];

  pageNumber:number = 1;
  endScroll:boolean = false;

  constructor(private punkApiService:PunkApiService) {
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


    if (!this.endScroll) {
      this.punkApiService.getBeerPage(++this.pageNumber)
      .subscribe(handleApiResponse)     
    }
  }

}
