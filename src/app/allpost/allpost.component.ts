import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// import { FilterPipeModule } from 'ngx-filter-pipe';
@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {
  searchText: any ;
  alluser: any = [];

  constructor(private _user: UserService, private _router: Router) {
    this._user.allpost()
      .subscribe(k => {
        this.alluser = k['data'];
      });
  }



  ngOnInit() {
    // function truncateText(selector, maxLength) {
    //   var element = document.querySelector(selector),
    //     truncated = element.innerText;

    //   if (truncated.length > maxLength) {
    //     truncated = truncated.substr(0, maxLength) + '...';
    //   }
    //   return truncated;
    // }

    // document.querySelector('p').innerText = truncateText('p', 107);

  }

}
