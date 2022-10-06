import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Beer } from '@model/beer';
import { ListMode } from '@model/list-mode';
import { BeerListHandlerService } from '@service/beer-list-handler.service';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss'],
})
export class BeerModalComponent implements OnInit {
  
  public get ListMode(): typeof ListMode {
    return ListMode; 
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: Beer,
              private beerListHandlerService:BeerListHandlerService  ) { }

  modeModal:ListMode =ListMode.BROWSE; 

  ngOnInit(): void {
    this.initStatusHandler();
  }

  private initStatusHandler():void{
    this.beerListHandlerService.listModeStatus.subscribe((mode)=>{this.modeModal=mode})
  }

}
