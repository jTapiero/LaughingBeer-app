import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '@class/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  @Input() listbeer:Array<Beer> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
