import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit {

  @Output() foodPairedSearch= new EventEmitter<string>()
  @Output() isBrowserModeOn= new EventEmitter<boolean>()

  foodPairedInputControl = new FormControl<string>('',{updateOn:"change"})
  isSearchModeOn:boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }



  onSubmitSearch(): void{
    let searchPattern = (this.foodPairedInputControl.value )?this.foodPairedInputControl.value:"";
    this.foodPairedSearch.emit(searchPattern)
  }

  onChange(event:any): void{
      this.isBrowserModeOn.emit(!this.isSearchModeOn)
  }
}
