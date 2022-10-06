import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListBeerMode } from '@model/list-beer-mode';
import { BeerListHandlerService  } from '@service/beer-list-handler.service';


@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BeerSearchComponent implements OnInit {

  @Output() foodPairedSearch= new EventEmitter<string>();

  foodPairedInputControl = new FormControl<string>('',{updateOn:"change"});
  advancedSearchMode:boolean = false;

  constructor(private beerListHandlerService:BeerListHandlerService) { }

  ngOnInit(): void {
  }

  onSubmitSearch(): void{
    this.beerListHandlerService.listMode = ListBeerMode.SEARCH;
    let searchPattern = (this.foodPairedInputControl.value)?this.foodPairedInputControl.value:"";
    this.foodPairedSearch.emit(searchPattern);
  }

  onChangeStatePanel(isSearchOn:boolean): void{
    this.advancedSearchMode = isSearchOn;
    if (!this.advancedSearchMode) {
      this.beerListHandlerService.listMode = ListBeerMode.BROWSE;
    }
  }

}
