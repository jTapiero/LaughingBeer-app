import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Beer } from '@class/beer';
import { BeerModalComponent } from '@component/beer-modal/beer-modal.component';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer:Beer = {} as Beer;

  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
  }

  openBeerModal():void{
    this.modal.open(BeerModalComponent,{data:this.beer});
  }

}
