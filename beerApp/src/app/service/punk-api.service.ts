import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '@class/beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {
  private PUNK_API_URL = "https://api.punkapi.com/v2/" ;

  constructor(private httpClient:HttpClient ) {
    
   }

  getAllBeer():Observable< any> {
    let url = `${ this.PUNK_API_URL}beers`
    return this.httpClient.get(url);
  }
}
