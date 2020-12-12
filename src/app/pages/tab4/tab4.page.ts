import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  private form = false;
  private accounts = [];
  private payments = [];
  private paymentForm: FormGroup;

  constructor(public toastController: ToastController, private formBuilder: FormBuilder, public paymentService: PaymentService, public accountService: AccountService, public loadingController: LoadingController) { 
    this.paymentForm = this.formBuilder.group({
      amount: ['', Validators.required],
      currency: ['', Validators.required],
      account_id: ['', Validators.required],
      user_id: ['', Validators.required],
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.getAccounts();
    this.getPayments();
  }

  async getAccounts(){
    this.accountService.getAccounts().subscribe((res:any) => {
      this.accounts = res.data;
    })
  }

  async createPayment(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.paymentForm.controls.user_id.setValue(localStorage.getItem('_id'));
    this.paymentService.createPayment(this.paymentForm.value).subscribe((res:any) => {
      this.getPayments();
      loading.dismiss();
      this.presentToast(res.message);
      this.paymentForm.reset();
      this.showForm();
    })
    
  }

  async doRefresh(event) {
    await this.getPayments();
    event.target.complete();
  }

  

  goToQr(id: String, router) {
    router.navigate(['/qr-code', id]);
  }

  async getPayments(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await loading.present();
    this.paymentService.getPayments().subscribe((res:any) => {
      this.payments = res.data;
      loading.dismiss();
    })
  }

  showForm(){
    this.form = !this.form;
  }

}
