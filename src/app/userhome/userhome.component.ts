import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  username: String = '';
  loginId: any;
  loginId2: String = '';
  owner1: String;
  constructor(private _user: UserService, private _router: Router) {
    this._user.user()
      .subscribe(
        data => this.addName(data),
        error => this._router.navigate(['/login'])
      )
    this._user.user()
      .subscribe(
        data1 => this.addId(data1),
        error => this._router.navigate(['/login'])
      )

  }
  addName(data) {
    this.username = data.username;
  }
  addId(data1) {
    this.loginId = data1._id,
    // this.owner1 =  data1.owner
    localStorage.setItem('loginId', (this.loginId));
    // localStorage.setItem('owner', (this.owner1));
  }

  //   store() {
  //   var inputId = document.getElementById("email");
  //   localStorage.setItem("email", inputEmail.value);
  // }

  // store() {
  //   // localStorage.setItem('loginId', JSON.stringify(this.loginId));
  // }

  ngOnInit() {

  }



}
