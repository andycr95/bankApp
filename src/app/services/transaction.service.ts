import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from "../config";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  readonly URL_API = config.url;

  constructor(
    private http: HttpClient) {
  }


  createTransaction(data: any) {
    return this.http.post(this.URL_API + '/transactions', data);
  }

  getTransactions(id: String) {
    return this.http.get(`${this.URL_API}/transactions?accountId=${id}`)
  }

  getTransaction(id: String) {
    return this.http.get(`${this.URL_API}/transactions/${id}`)
  }
}
