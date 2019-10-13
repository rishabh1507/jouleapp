import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourpost',
  templateUrl: './yourpost.component.html',
  styleUrls: ['./yourpost.component.css']
})
export class YourpostComponent implements OnInit {
  data: any = [];
  uid: any;
  user: any = [];
  constructor(private _router: Router, private _userService: UserService) { }
  loginId = localStorage.getItem('loginId');

  ngOnInit() {
    this._userService.getdatabyid(this.loginId).subscribe(k => {
      this.data = k['data'];
    });
  }
  todelete(id) {
    this.uid = id;
  }
  toupdate(k) {
    this.user = k;
  }

  updatepost(udd) {
    this._userService.updatepost(udd.value)
      .subscribe(
        data => { console.log(data); this._router.navigate(['/allpost']); },
        error => console.error(error)
      )
    // console.log(JSON.stringify(this.registerForm.value));
  }
  deletepost() {
    this._userService.deletepost(this.uid)
      .subscribe(
        data => { console.log(data); this._router.navigate(['/allpost']); },
        error => console.error(error)
      )
    // console.log(JSON.stringify(this.registerForm.value));
  }


}
