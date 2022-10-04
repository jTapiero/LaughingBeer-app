import { Injectable } from '@angular/core';
import { ListMode } from '@class/list-mode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerListHandlerService {

  private listModeOn:ListMode = ListMode.BROWSE;
  private listModeSubject = new BehaviorSubject<ListMode>(ListMode.BROWSE); 

  public get listModeStatus() : Observable<ListMode> {
    return this.listModeSubject.asObservable();
  }
 
  public get statusList() : ListMode {
    return this.listModeOn;
  }
  
  public set setListModeStatus(mode : ListMode) {
    this.listModeOn = mode;
    this.listModeSubject.next(mode);
  }
  
  constructor() { }
}
