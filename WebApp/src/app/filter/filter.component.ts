import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  noOfRooms = false;
  socialFacts = false;
  perfectFlatMates = false;
  infrastructure = false;
  //socialFacts = true;
  constructor() { }

  ngOnInit(): void {
  }

  flatClick(){
    this.noOfRooms = !this.noOfRooms;
  }
  sharedFlatClick(){
    this.perfectFlatMates = !this.perfectFlatMates;
  }
  socialFactsClick(){
    this.socialFacts = !this.socialFacts;
  }
  infrastructureClick(){
    this.infrastructure = !this.infrastructure;
  }

}
