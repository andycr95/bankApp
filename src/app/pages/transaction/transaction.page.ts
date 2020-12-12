import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';
import { PaymentService } from 'src/app/services/payment.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  private transacForm: FormGroup;
  private payment: any;
  private accounts = [];

  constructor(public toastController: ToastController, private formBuilder: FormBuilder,public paymentService: PaymentService, private router: Router, public transactionService: TransactionService, public loadingController: LoadingController, public accountService: AccountService, private route: ActivatedRoute) {
    this.transacForm = this.formBuilder.group({
      amount: ['', Validators.required],
      payment_id: ['', Validators.required],
      currency: ['', Validators.required],
      origin_id: ['', Validators.required],
      account_id: [''],
      account: [''],
    });
  }

  ngOnInit() {
    this.get();
    this.getAccounts();
  }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }



  async getAccounts(){
    this.accountService.getAccounts().subscribe((res:any) => {
      this.accounts = res.data;
    })
  }

  async get(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await loading.present();
    this.paymentService.getPayment(this.route.snapshot.paramMap.get('id')).subscribe((res:any) => {
      this.payment = res.data;
      this.transacForm.controls.amount.setValue(this.payment.amount);
      this.transacForm.controls.currency.setValue(this.payment.currency);
      this.transacForm.controls.origin_id.setValue(this.payment.origin_id);
      this.transacForm.controls.account.setValue(this.payment.account);
      this.transacForm.controls.payment_id.setValue(this.payment._id);
      loading.dismiss();
    })
  }

  async createTransaction(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await loading.present();
    this.transacForm.controls.account_id.setValue(this.payment.account_id);
    this.transactionService.createTransaction(this.transacForm.value).subscribe((res:any) => {
      if (res.status) {
        this.presentToast(res.message);
        this.router.navigate(['/tabs/tab4']);
      } else {
        this.presentToast(res.message);
      }
      loading.dismiss();
    })
  }

}
