import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  searchText: any;
  alluser: any = [];
  // constructor() { }
  constructor(private _user: UserService, private _router: Router) {
    this._user.guest()
      .subscribe(k => {
        this.alluser = k['data'];
      });
  }

  ngOnInit() {
  }

}
