import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

 public accountForm: FormGroup;

  constructor(public toastController: ToastController, private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) { 
    this.accountForm = this.formBuilder.group({
      number: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      name: ['', Validators.required],
      type: ['', Validators.required],
      user_id: [''],
      balance: ['']
    });
  }

  ngOnInit() {}

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  createAccount(){
    this.accountForm.controls.user_id.setValue(localStorage.getItem('_id'));
    this.accountForm.controls.balance.setValue(0);
    this.accountService.createAccount(this.accountForm.value).subscribe((res:any) =>{
      if (res.status) {
        this.presentToast('Cuenta registrada');
        this.router.navigate(['/']);
        this.accountForm.reset();
      }
    })
  }

}
