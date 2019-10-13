import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  register(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // two(body: any) {
  //   return this._http.post('http://127.0.0.1:3000/users/two', body, {
  //     observe: 'body',
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   });
  // }

  login(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  user() {
    return this._http.get('http://127.0.0.1:3000/users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
  logout() {
    return this._http.get('http://127.0.0.1:3000/users/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
  makepost(body: any) {
    return this._http.post('http://127.0.0.1:3000/users/makepost', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  fullpost() {
    return this._http.get('http://127.0.0.1:3000/users/fullpost', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  allpost() {
    return this._http.get('http://127.0.0.1:3000/users/allpost', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  guest() {
    return this._http.get('http://127.0.0.1:3000/guest', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }


  getdatabyid(id) {
    return this._http.get('http://127.0.0.1:3000/users/getpost/' + id, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  deletepost(id) {
    return this._http.delete('http://127.0.0.1:3000/users/deletepost/' + id, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  updatepost(udd) {
    return this._http.put('http://127.0.0.1:3000/users/updatepost/', udd, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }



  // getpost(id) {
  //   return this._http.get()('http://127.0.0.1:3000/users/getpost', {
  //     observe: 'body',
  //     withCredentials: true,
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   })
  // }

}
