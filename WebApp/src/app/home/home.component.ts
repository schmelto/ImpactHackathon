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
  }

  test() {
    console.log('Test');
    console.log(this.service.getTest());
  }
}
