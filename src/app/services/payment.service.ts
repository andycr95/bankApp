import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from "../config";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  readonly URL_API = config.url;

  constructor(
    private http: HttpClient) {
  }


  createPayment(data: any) {
    return this.http.post(this.URL_API + '/payments', data);
  }

  getPayments() {
    let id = localStorage.getItem('_id');
    return this.http.get(`${this.URL_API}/payments?userId=${id}`)
  }

  getPayment(id: String) {
    return this.http.get(`${this.URL_API}/payments/${id}`)
  }
}
