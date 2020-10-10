import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// const options = {responseType: 'text' as 'text'};
const options = {responseType: 'json' as 'json'};
@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  readonly BaseURI = "http://vortex.cubuzz.de:8500/api/v1/search/dummy";

  constructor(private http: HttpClient) { }

  public getTest() {
    return this.http.get(this.BaseURI, options);
  }

}
