import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.css']
})
export class SidenavComponent implements OnInit {
  username: any;

  constructor(private _user: UserService, private _router: Router) { 
    this._user.user()
      .subscribe(
        data => this.addName(data),
        error => this._router.navigate(['/login'])
      )
  }
 
  ngOnInit() {
  }

  

  logout() {
    this._user.logout()
      .subscribe(
        data => { console.log(data); this._router.navigate(['/login']) },
        error => console.error(error)
      )
    localStorage.removeItem('loginId');

  }
  addName(data) {
    this.username = data.username;
  }

}
