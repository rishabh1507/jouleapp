import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-makepost',
  templateUrl: './makepost.component.html',
  styleUrls: ['./makepost.component.css'],

})
export class MakepostComponent implements OnInit {

  // value:string;

  // writeValue(value: any): void {
  //   this.value = value ?value:'';
  // }
  // registerOnChange(fn: any): void {
  //   throw new Error("Method not implemented.");
  // }
  // registerOnTouched(fn: any): void {
  //   throw new Error("Method not implemented.");
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }



  loginId = localStorage.getItem('loginId');

  constructor(private _router: Router, private _userService: UserService) { }

  makepost(pt) {
    this._userService.makepost(JSON.stringify(pt.value))
      .subscribe(
        data => { console.log(data); this._router.navigate(['/allpost']); },
        error => console.error(error)
      )
    // console.log(JSON.stringify(this.registerForm.value));
  }

  ngOnInit() {
  }

}
