import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(public service: UserService) { }
  data$ = [];
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getUser().subscribe((data: any) => {
      this.data$ = data;
      //console.log(data);
    });
  }

}
