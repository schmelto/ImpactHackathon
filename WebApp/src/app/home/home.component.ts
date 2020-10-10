import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../_services/test.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor(public service: TestService,public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DialogElementsExampleDialog, {data: this.currentdata$});
  }
  index = -1;
  currentdata$;
  data$ = [];

  ngOnInit() {
    this.loadData();
    this.currentdata$ = this.data$[this.index];
    
    
  }

   loadData() {
    this.service.getTest().subscribe((data: any) => {
      this.data$ = data;
      console.log(data)
    });
  }

  nextdata() {
    console.log(this.index);
    this.index++;
    this.currentdata$ = this.data$[this.index];
  }

  test() {
    console.log("Test");
  }



}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
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