import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../_services/test.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service: TestService,public dialog: MatDialog, private _snackBar: MatSnackBar) { }

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
    });
  }

  nextdata() {
    this.index = 0;
    this.currentdata$ = this.data$[this.index];
  }

  nextdata1() {
    this.index++;
    this.currentdata$ = this.data$[this.index];
  }

  nextdata2() {
    this._snackBar.openFromComponent(MatchDialog, {
      duration: 3000,
      verticalPosition: 'top', horizontalPosition:'center',
    });
    console.log(this.index);
    this.index++;
    this.currentdata$ = this.data$[this.index];
  }

}

@Component({
  selector: 'details-dialog',
  templateUrl: 'details-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'match-dialog',
  templateUrl: 'match-dialog.html',
})
export class MatchDialog {
  
}