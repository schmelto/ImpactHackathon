import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  readonly BaseURI = 'vortex.cubuzz.de:8500/api/v1';

  constructor(private http: HttpClient) { }

  public getTest() {
    return this.http.get(this.BaseURI);
  }

}
