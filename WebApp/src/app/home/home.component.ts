import { Component, OnInit } from '@angular/core';
import { TestService } from '../_services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor(public service: TestService) { }

  data$;

  ngOnInit() {
    this.loadData();
    
  }

   loadData() {
    this.service.getTest().subscribe((data: any) => {
      this.data$ = data;
    });
  }



}


//   console.log(this.service.getTest());

  //   this.service.getTest().subscribe((data: any) => {
  //     console.log("subscribe:" + data);
  //   });




  //   var Http = new XMLHttpRequest();
  //   var url='http://vortex.cubuzz.de:8500/api/v1/';
  //   Http.open("GET", url);
  //   Http.send();
  
  //   Http.onreadystatechange = (e) => {
  //     console.log(Http.responseText)
  //   }
  //   let varia;
  //   this.service.getTest().subscribe((res) => {
  //     varia = res;
  //     console.log("subscribe:" + res);
  //   });
  //   console.log(varia);


  // }

  // test() {
    
  // }