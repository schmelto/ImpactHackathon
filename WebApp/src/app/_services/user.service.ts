import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options = {responseType: 'json' as 'json'};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly BaseURI = "http://vortex.cubuzz.de:8500/api/v1/user?uid=1";

  constructor(private http: HttpClient) { }

  public getUser() {
    return this.http.get(this.BaseURI, options);
  }

}
