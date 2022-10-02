import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {
  private PUNK_API_URL = "https://api.punkapi.com/v2/" ;
  private BEER_BY_PAGE = 12 ;

  constructor(private httpClient:HttpClient ) {
    
   }

  getAllBeer():Observable< any> {
    let url = `${ this.PUNK_API_URL}beers`
    return this.httpClient.get(url);
  }

  getBeerPage(pageNumber:number):Observable<any> {
    console.log("api call")
    let url = `${this.PUNK_API_URL}beers?page=${pageNumber}&per_page=${this.BEER_BY_PAGE}`
    //error
    //empty array
    
    return this.httpClient.get(url);
  }




}
