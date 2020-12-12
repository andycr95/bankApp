import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from "../config";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  readonly URL_API = config.url;

  constructor(
    private http: HttpClient) {
  }


  createAccount(data: any) {
    return this.http.post(this.URL_API + '/accounts', data);
  }

  getAccounts(search: String = '') {
    let id = localStorage.getItem('_id');
    return this.http.get(`${this.URL_API}/accounts?search=${search}&userId=${id}`)
  }

  getAccount(id: String) {
    return this.http.get(`${this.URL_API}/accounts/${id}`)
  }
}
