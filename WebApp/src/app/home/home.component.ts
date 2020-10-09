import { Component, OnInit } from '@angular/core';
import { TestService } from '../_services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service: TestService) { }

  ngOnInit(): void {
    console.log('Test');
    console.log(this.service.getTest());

    console.log('Test2');
    var Http = new XMLHttpRequest();
    var url='http://vortex.cubuzz.de:8500/api/v1/';
    Http.open("GET", url);
    Http.send();
  
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
  }

  test() {
    console.log('Test');
    console.log(this.service.getTest2());
  }


}
