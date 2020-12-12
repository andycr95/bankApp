import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from "../config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL_API = config.url;

  constructor(
    private http: HttpClient, private router: Router) {
  }


  createUser(data: any) {
    return this.http.post(this.URL_API + '/users', data);
  }

  login(data: any) {
    return this.http.post(this.URL_API + '/users/login', data);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem('TOKEN');
    return this.http.get(this.URL_API+'/users/isLoggin'+`?token=${token}`)
  }
}
