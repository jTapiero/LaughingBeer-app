import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Beer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { BeerListHandlerService } from '@service/beer-list-handler.service';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss'],
})
export class BeerModalComponent implements OnInit {
  
  public get ListBeerMode(): typeof ListBeerMode {
    return ListBeerMode; 
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Beer,
              private beerListHandlerService:BeerListHandlerService  ) { }

  modeModal:ListBeerMode =ListBeerMode.BROWSE; 

  ngOnInit(): void {
    this.initStatusHandler();
  }

  private initStatusHandler():void{
    this.beerListHandlerService.listModeEvent.subscribe((mode)=>{this.modeModal=mode});
  }

}
