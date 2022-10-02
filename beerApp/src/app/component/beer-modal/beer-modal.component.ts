import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Beer } from '@class/beer';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss']
})
export class BeerModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Beer) { }

  ngOnInit(): void {
  }

}
