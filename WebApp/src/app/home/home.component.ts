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
  index = 0;
  currentdata$;
  data$ = [
    {
      "title": "Nice WG in Downtown",
      "type": "WG",
      "location": "Musterstraße 42, 74214 Musterstadt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Aliquet enim tortor at auctor urna nunc id cursus. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Elit ut aliquam purus sit amet luctus. Lacus laoreet non curabitur gravida arcu ac. Scelerisque eleifend donec pretium vulputate sapien nec. Viverra nam libero justo laoreet sit. Enim sed faucibus turpis in. Vel elit scelerisque mauris pellentesque.",
      "imgurl": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
    },
    {
      "title": "Test123",
      "type": "House",
      "location": "Musterstraße 42, 74214 Musterstadt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Aliquet enim tortor at auctor urna nunc id cursus. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Elit ut aliquam purus sit amet luctus. Lacus laoreet non curabitur gravida arcu ac. Scelerisque eleifend donec pretium vulputate sapien nec. Viverra nam libero justo laoreet sit. Enim sed faucibus turpis in. Vel elit scelerisque mauris pellentesque.",
      "imgurl": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "title": "Test123",
      "type": "Penthouse",
      "location": "Musterstraße 42, 74214 Musterstadt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Aliquet enim tortor at auctor urna nunc id cursus. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Elit ut aliquam purus sit amet luctus. Lacus laoreet non curabitur gravida arcu ac. Scelerisque eleifend donec pretium vulputate sapien nec. Viverra nam libero justo laoreet sit. Enim sed faucibus turpis in. Vel elit scelerisque mauris pellentesque.",
      "imgurl": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "title": "Test123",
      "type": "House",
      "location": "Musterstraße 42, 74214 Musterstadt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Aliquet enim tortor at auctor urna nunc id cursus. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Elit ut aliquam purus sit amet luctus. Lacus laoreet non curabitur gravida arcu ac. Scelerisque eleifend donec pretium vulputate sapien nec. Viverra nam libero justo laoreet sit. Enim sed faucibus turpis in. Vel elit scelerisque mauris pellentesque.",
      "imgurl": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "title": "Lorem ipsum",
      "type": "House",
      "location": "Musterstraße 42, 74214 Musterstadt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Aliquet enim tortor at auctor urna nunc id cursus. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Elit ut aliquam purus sit amet luctus. Lacus laoreet non curabitur gravida arcu ac. Scelerisque eleifend donec pretium vulputate sapien nec. Viverra nam libero justo laoreet sit. Enim sed faucibus turpis in. Vel elit scelerisque mauris pellentesque.",
      "imgurl": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    }
    
  ];

  ngOnInit() {
    // this.loadData();
    this.currentdata$ = this.data$[this.index];
    console.log(this.currentdata$)
    
  }

   loadData() {
    this.service.getTest().subscribe((data: any) => {
      this.data$ = data;
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